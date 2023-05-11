import Navbar from './Navbar'
import Footer from './Footer'

const MainComponentLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainComponentLayout
