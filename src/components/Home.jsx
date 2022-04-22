import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typical from 'react-typical';
import { Link } from 'react-scroll/modules';


const Home = () => {
  return (
      <main className='w-full h-screen bg-blue-900' name="home">
    <div className='max-w-5xl mx-auto px-8 2xl:px-0 h-full flex flex-col justify-center'>
        <h6 className='text-pink-600'>Hi, My Name is</h6>
        <h1 className='mt-1 text-4xl sm:text-7xl font-bold text-gray-250'>Umer Aziz</h1>
        <h2 className='mt-2 text-4xl sm:text-7xl font-bold text-gray-550 flex'>
        <Typical
        steps={["I'm a Full Stack Developer..", 2000, "I'm a MERN Stack Developer..", 1000, "I'm a Wordpress Developer..", 1000]}
        loop={Infinity}
      />
        </h2>
        <p  className='text-gray-550 py-4 max-w-[700px]'>I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
          <div>
          <Link  to="works" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Work      
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
    </div>
    </main>
  )
}

export default Home