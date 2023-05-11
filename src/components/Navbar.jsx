import { IoMdMusicalNote } from 'react-icons/io'
const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white h-20">
      <div className="flex justify-center items-center h-full gap-1">
        <IoMdMusicalNote className="text-3xl text-white" />
        <p className="text-2xl font-bold font-poppins">sound sphere .</p>
      </div>
    </nav>
  )
}

export default Navbar
