import Router from './routes/Router'
import CategoryProvider from "./context/CategoryProvider"

function App() {

  return (
    <>
      <CategoryProvider>
        <Router />
      </CategoryProvider>
    </>
  )
}

export default App
