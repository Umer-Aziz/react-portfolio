import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

      const items =useSelector((state)=> state.cart);

  return (
    <div className='bg-blue-400 py-4 px-8 2xl:px-0 text-white'>
     <div className='max-w-6xl mx-auto flex items-center justify-between gap-x-4 uppercase'>
         <span className='font-semibold'>REDUX STORE</span>
         <div className='flex gap-x-4'>
             <Link to="/react-portfolio" className='hover:text-gray-100'>Home</Link>
             <Link to='/cart' className='hover:text-gray-100'>Cart</Link>
             <span className='font-semibold hover:text-gray-100'>Cart Count : {items.length}</span>
         </div>
     </div>
    </div>
  )
}

export default Navbar