import AudioPlayer from "./AudioPlayer"

const Song = ({ song }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center sm:absolute sm:left-24 sm:-top-10">
      <img src={song.image} alt={song.title} className="w-64 h-64 rounded-lg z-10" />
      <div className="flex flex-col gap-2 -mt-10 ml-10">
        <p className="text-xl font-normal font-rubik uppercase tracking-widest">{song.artist}</p>
        <p className="text-sm font-light font-rubik">{song.title}</p>
        <AudioPlayer src={song.audio} />
      </div>
    </div>
  )
}

export default Song
