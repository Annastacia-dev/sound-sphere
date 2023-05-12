import { useState } from 'react'
import { FiShare} from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import {IoMdHeartEmpty, IoMdHeart} from 'react-icons/io'

const Actions = () => {

  const [liked, setLiked] = useState(false)


  return (
    <div className='flex sm:flex-col flex-row sm:items-start sm:ml-6 justify-center items-center sm:gap-6 gap-8 sm:mt-2 mt-4 sm:mb-0 mb-4 sm:px-4 sm:py-6'>
      {liked ? (
        <IoMdHeart className='text-xl text-black cursor-pointer' onClick={() => setLiked(!liked)} />
      ) : (
        <IoMdHeartEmpty className='text-xl text-black cursor-pointer' onClick={() => setLiked(!liked)} />
      )}
      <AiOutlinePlus className='text-xl text-black cursor-pointer' />
      <FiShare className='text-xl text-black cursor-pointer' />
    </div>
  )
}

export default Actions
