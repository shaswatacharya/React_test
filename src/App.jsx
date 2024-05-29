// import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Toolbar from './Components/Navigation/Toolbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

 function App() {
  return (
    <Router>
      <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}
export default App