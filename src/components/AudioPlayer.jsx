import ControlBar from "./ControlBar";
import { PlayerContext } from "../contexts/PlayerProvider";
import { useContext } from "react";


const AudioPlayer = ({ src }) => {
  const {
    audioRef,
    handleLoadedMetadata,
    handleTimeUpdate,
    currentTime,
    duration,
    handleTimeChange,
    progress,
    remainingTime
  } = useContext(PlayerContext);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center">
      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center relative">
            <span className="absolute text-xs top-4 font-rubik">{formatTime(currentTime)}</span>
              <div
                className="sm:w-80 w-48 h-1 bg-gray-300 outline-none appearance-none
                cursor-pointer"
                onMouseEnter={(e) => {
                  const childNode = e.target.childNodes[1];
                  childNode.classList.remove("hidden");
                }}
                onMouseLeave={(e) => {
                  const childNode = e.target.childNodes[1];
                  childNode.classList.add("hidden");
                }}
              >
                <div
                  className="h-1 bg-black"
                  style={{ width: `${progress}%` }}
                />
                <input
                  type="range"
                  value={currentTime}
                  onChange={handleTimeChange}
                  className="w-full h-full outline-none appearance-none
                  cursor-pointer bg-transparent absolute top-0.5 hidden"
                  style={{ background: "transparent" }}
                  max={duration}
                />
              </div>
            <span className="absolute text-xs top-4 right-1 font-rubik">
              {formatTime(isNaN(remainingTime) ? 0 : remainingTime)}
            </span>
          </div>
          <ControlBar />
        </div>
        </div>
      </div>
  );
};

export default AudioPlayer;
