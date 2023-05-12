import { createContext, useState, useRef, useEffect } from "react";
import songs from '../data/songs.json'
import useInterval from "../utils/useInterval";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const audioRef = useRef();
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("none");
  const [shuffledSongs, setShuffledSongs] = useState([]);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (mode === "shuffle") {
      const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
      setShuffledSongs(shuffledSongs);
    } else if (mode === "repeat") {
      setShuffledSongs(songs);
    } else if (mode === "repeat-one") {
      setShuffledSongs([currentSong]);
    } else {
      setShuffledSongs([]);
    }
  }, [mode]);

  const toggleShuffle = () => {
    if (mode === "shuffle") {
      setMode("none");
    } else {
      setMode("shuffle");
    }
  };


  useEffect(() => {
    if (shuffledSongs.length) {
      const newIndex = shuffledSongs.findIndex((song) => song.id === currentSong.id);
      setCurrentSongIndex(newIndex);
    }
  }, [shuffledSongs]);

  useEffect(() => {
    audioRef.current.addEventListener('ended', nextSong);
    return () => {
      audioRef.current.removeEventListener('ended', nextSong);
    }
  }, [currentSongIndex]);

  const previousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songs[newIndex].audio;
    audioRef.current.load()
    audioRef.current.addEventListener('canplaythrough', () => {
      audioRef.current.play();
      setIsPlaying(true);
    });
  };

  const nextSong = () => {
    let newIndex;
    if (mode === "none") {
      newIndex = (currentSongIndex + 1) % songs.length;
    } else {
      const currentIndex = shuffledSongs.indexOf(currentSong);
      if (currentIndex === -1 || currentIndex === shuffledSongs.length - 1) {
        newIndex = 0;
      } else {
        newIndex = currentIndex + 1;
      }
    }
    setCurrentSongIndex(newIndex);
    audioRef.current.src = mode === "none" ? songs[newIndex].audio : shuffledSongs[newIndex].audio;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration || 0);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setRemainingTime(audioRef.current.duration - audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  useInterval(() => {
    setCurrentTime(audioRef.current.currentTime);
  }, 10);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentSongIndex,
        setCurrentSongIndex,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        remainingTime,
        setRemainingTime,
        audioRef,
        progress,
        setProgress,
        currentSong,
        previousSong,
        nextSong,
        togglePlay,
        handleTimeChange,
        handleLoadedMetadata,
        handleTimeUpdate,
        mode,
        setMode,
        shuffledSongs,
        toggleShuffle,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
