const Footer = () => {
  return (
    <footer className="w-full bg-black text-white h-20 fixed bottom-0 z-10">
      <div className="flex justify-center items-center h-full gap-1">
        <p className="text-sm font-rubik font-thin">
          Created by Annastacia | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
