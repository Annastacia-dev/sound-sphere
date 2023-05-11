import { AiOutlineHeart, AiFillHeart, AiOutlinePlus, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { MdOutlineShuffle } from 'react-icons/md'
import { BsArrowRepeat } from 'react-icons/bs'
import Songs from './Songs'

export const SongsPlayer = () => {
  return (
    <div className="flex justify-center items-center">
      <Songs />
    </div>
  )
}

export default SongsPlayer
