import React , { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars , FaTimes , FaGithub , FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll/modules';


const Navbar = () => {

    const [nav , setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <header className='text-gray-300 fixed w-full px-4 md:px-x 2xl:px-0 bg-blue-900'>
    <div className='max-w-7xl w-full mx-auto h-[78px] md:h-[82px] flex justify-between items-center'>
    <div className='z-10'>
    <img src={Logo} alt="Logo img" style={{width:'50px',cursor:'pointer'}} />
    </div>

    {/* menu  */}

    <div className='hidden md:block'>
        <ul className='md:flex justify-between w-96 text-lg'>
            <li className='hover:text-white cursor-pointer'><Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
            <li className='hover:text-white cursor-pointer'><Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
            <li className='hover:text-white cursor-pointer'><Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        </li>
            <li className='hover:text-white cursor-pointer'><Link to="works" smooth={true} duration={500}>
          Works
        </Link>
        </li>
            <li className='hover:text-white cursor-pointer'><Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
        </ul>
    </div>

    {/* humburger  */}

     <div className='md:hidden z-10' onClick={handleClick}>
         {!nav ? <FaBars/> : <FaTimes/>}
     </div>
     

     {/*mobile menu items */}

     <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-900 grid place-content-center md:hidden'}>
        <ul className='text-lg'>
            <li className='hover:text-white cursor-pointer py-4 text-3xl text-left'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
            <li className='hover:text-white cursor-pointer py-4 text-3xl text-left'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link></li>
            <li className='hover:text-white cursor-pointer py-4 text-3xl text-left'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
            <li className='hover:text-white cursor-pointer py-4 text-3xl text-left'><Link  onClick={handleClick} to="works" smooth={true} duration={500}>
          Works
        </Link></li>
            <li className='hover:text-white cursor-pointer py-4 text-3xl text-left'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>
    </div>

    {/* Social Icons  */}

    <div className='flex flex-col fixed top-[35%] left-0 hidden md:block'>
     <ul>
         <li className='px-4 w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
         <a href="/" className='flex justify-between items-center w-full text-gray-300'>
         LinkedIn  <FaLinkedin size={30}/>
         </a>
         </li>
         <li className='px-4 w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900'>
         <a href="/" className='flex justify-between items-center w-full text-gray-300'>
         Github  <FaGithub size={30}/>
         </a>
         </li>
         <li className='px-4 w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
         <a href="/" className='flex justify-between items-center w-full text-gray-300'>
         Email  <HiOutlineMail size={30}/>
         </a>
         </li>
         <li className='px-4 w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
         <a href="/" className='flex justify-between items-center w-full text-gray-300'>
         Resume  <BsFillPersonLinesFill size={30}/>
         </a>
         </li>
     </ul>
    </div>

    </div>
    </header>
  )
}

export default Navbar