import AudioPlayer from "./AudioPlayer"
import Actions from "./Actions"

const Song = ({ song }) => {
  return (
    <>
    <Actions />
    <div className="flex sm:flex-row flex-col justify-center items-center sm:absolute sm:left-24 sm:-top-10">
      <img src={song.image} alt={song.title} className="sm:w-64 sm:h-64 w-80 rounded-lg z-10" />
      <div className="flex flex-col gap-2 sm:-mt-20 mt-6 sm:ml-6">
        <p className="text-xl font-normal font-rubik uppercase tracking-widest">{song.artist}</p>
        <p className="text-sm font-light font-rubik">{song.title}</p>
        <AudioPlayer src={song.audio} />
      </div>
    </div>
  </>
  )
}

export default Song
