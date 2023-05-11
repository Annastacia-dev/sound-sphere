import MainComponentLayout from "./components/MainComponentLayout"
import PageLayout from "./components/PageLayout"

function App() {
  return (
    <div>
      <MainComponentLayout>
        <PageLayout />
      </MainComponentLayout>
    </div>
  )
}

export default App
