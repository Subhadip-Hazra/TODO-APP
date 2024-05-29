import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
        <Footer/>
      </Router>
    </main>
  )
}

export default App