import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
      </Router>
    </main>
  )
}

export default App