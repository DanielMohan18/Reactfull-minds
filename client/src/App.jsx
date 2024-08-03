import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Signin from './pages/Signin'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header  />
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/dashboard' element={<Dashboard />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/signin' element={<Signin />}/>
     <Route path='/signup' element={<SignUp />}/>
     <Route path='/projects' element={<Projects />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
