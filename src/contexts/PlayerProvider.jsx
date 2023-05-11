import { createContext, useState, useRef } from "react";
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

  const currentSong = songs[currentSongIndex];

  const previousSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
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
    setDuration(audioRef.current.duration);
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
