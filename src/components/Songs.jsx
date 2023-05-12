import { useState } from 'react'
import songs from '../data/songs.json'
import Song from './Song'
import { PlayerContext } from '../contexts/PlayerProvider'
import { useContext } from 'react'

const Songs = () => {
  const { currentSong } = useContext(PlayerContext)

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white sm:w-[45rem] w-60 sm:absolute sm:h-44 h-96 sm:mt-0 -mt-16 rounded-md shadow-lg">
        <Song song={currentSong} />
      </div>
    </div>
  )
}

export default Songs

