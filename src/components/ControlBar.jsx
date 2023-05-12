import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { MdOutlineShuffle } from "react-icons/md";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { PlayerContext } from "../contexts/PlayerProvider";
import { useContext } from "react";


const ControlBar = () => {
  const {
    previousSong,
    nextSong,
    togglePlay,
    currentSong,
    isPlaying,
    setIsPlaying,
   } = useContext(PlayerContext);

  return (
    <div className="flex items-center absolute gap-4 sm:bottom-16 bottom-24">
      <TbPlayerTrackPrevFilled
        className="text-2xl text-black cursor-pointer"
        onClick={previousSong}
      />
      {isPlaying ? (
        <AiFillPauseCircle
          className="text-4xl text-black cursor-pointer"
          onClick={togglePlay}
        />
      ) : (
        <AiFillPlayCircle
          className="text-4xl text-black cursor-pointer"
          onClick={togglePlay}
        />
      )}
      <TbPlayerTrackNextFilled
        className="text-2xl text-black cursor-pointer"
        onClick={nextSong}
      />
    </div>
  )
}

export default ControlBar
