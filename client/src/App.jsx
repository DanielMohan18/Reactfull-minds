import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
import Signup from './pages/Signup'
// import Header from './components/Header'
const App = () => {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/dashboard' element={<Dashboard />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/signin' element={<Signin />}/>
     <Route path='signup' element={<Signup />}/>
     <Route path='/projects' element={<Projects />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
