import { Button, Navbar,  TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import {FaSearch,FaMoon} from "react-icons/fa"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
const Header = () => {
    const [value,setvalue] = useState(false);
    const [color,setcolor] = useState("home");
    const toggleMenu = () => {
        setvalue(!value);
      };  
    const colorh =()=>{
        setcolor("home");
    }
    const colora =()=>{
        setcolor("about");
    } 
    const colorp =()=>{
        setcolor("projects");
    }   
  return (
   <div className="border-b-2 flex flex-col justify-between px-11 py-2">
    <Navbar >
      <Link to='/' className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold ">
          <span className="px-2 py-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-xl text-white ">Reactfull</span>
          Minds
      </Link>
      <form>
        <input rightIcon={FaSearch} type="text" placeholder="search..." className="px-3  py-1 hidden md:inline rounded-xl border outline-none border-gray-500">
        </input>
      </form>
      <Button className="w-12 h-10 flex justify-center items-center rounded-3xl md:hidden" color="gray" pill >
        <FaSearch />
      </Button>
      <div className="flex flex-wrap gap-2 md:order-2">
        <Button className="w-12 h-10 flex justify-center items-center rounded-3xl outline" color="gray" pill>
         <FaMoon />
        </Button>
        <Link to='/signin' >
         <Button className="rounded-lg text-black hover:bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 hover:text-white font-semibold px-5 outline text-xl whitespace-nowrap"  color="gray" >
           Sign in
         </Button>
        </Link>

        <FiMenu className="w-8 h-8 px-1  md:hidden border-2 mt-1"
        onClick={toggleMenu}/>
       
      </div>
      <Navbar  className="flex gap-2 hidden md:inline">
      <Link to='/' >
      <div onClick={colorh} className={`px-2 hover:text-blue-400  ${color=="home" ? 'text-blue-400':''}`}  >Home</div>
      </Link>
      <Link to='/about'>
      <div onClick={colora} className={`px-2 hover:text-blue-400  ${color=="about" ? 'text-blue-400':''}`}> About</div>
      </Link>
      <Link to='/projects'>
      <div onClick={colorp} className={`px-2 hover:text-blue-400  ${color=="projects" ? 'text-blue-400':''}`}>Projects</div>
      </Link>
      </Navbar> 
   </Navbar>
    <div className={`flex flex-col pl-2 ${ value ? 'inline':'hidden'}`}>
      <Link to='/'>
       <div onClick={colorh} className={` hover:text-blue-400 border-b-2 px-8 flex ${color=="home" ? 'text-blue-400':''}`}>
        <GoDotFill className="mt-1 pr-1"/> Home</div>
      </Link> 
      <Link to='/about'>
      <div onClick={colora} className={` hover:text-blue-400 border-b-2 px-8 flex ${color=="about" ? 'text-blue-400':''}`}>
      <GoDotFill className="mt-1 pr-1"/> About</div>
      </Link>
      <Link to='/projects'>
      <div onClick={colorp} className={` hover:text-blue-400 border-b-2 px-8 flex ${color=="projects" ? 'text-blue-400':''}`}>
      <GoDotFill className="mt-1 pr-1"/>Projects</div>
      </Link>
    </div>
   </div>
  )
}

export default Header
{/*  */}
