import { Button, Navbar,  TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import {FaMoon} from "react-icons/fa"
import { useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {  
  const path=useLocation().pathname;
  return (
   <div className="border-b-2 flex flex-col justify-between px-11 py-2 w-full ">
    <Navbar >
      <Link to='/' className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold ">
          <span className="px-2 py-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-xl text-white ">Reactfull</span>
          Minds
      </Link>
      <form>
        {/* <input rightIcon={FaSearch} type="text" placeholder="search..." className="px-3  py-1 hidden md:inline rounded-xl border outline-none border-gray-500">
        </input> */}
        <TextInput type="text"
        placeholder="Search..."
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'>
          
        </TextInput>
      </form>
      <Button className="w-12 h-10 lg:hidden flex justify-center items-center rounded-3xl " color="gray" pill >
        <AiOutlineSearch /> 
      </Button>
      <div className="flex flex-wrap gap-2 md:order-2">
        <Button className="w-12 h-10 flex justify-center items-center rounded-3xl outline" color="gray" pill>
         <FaMoon />
        </Button>
        <Link to='/signin' >
         <Button outline gradientDuoTone="redToYellow">
          Sign In
         </Button>
        </Link>
       <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
          <Navbar.Link active={path=== "/"} as={'div'}>
            <Link className=" text-base" to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path=== "/about"} as={'div'}>
            <Link className=" text-base" to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path=== "/projects"} as={'div'}>
            <Link className=" text-base" to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
   </div>
  )
}

export default Header
{/*  */}
