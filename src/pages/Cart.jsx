import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const Product = useSelector((state)=> state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product)=>{
    dispatch(remove(product));
    toast.warn("Product removed 😟",{
      autoClose: 3000,
    });
  }


  return (
    <div className='px-8 2xl:px-0 my-20 grid gap-6 max-w-7xl mx-auto'>
        <h1 className='font-medium text-xl'>Cart items</h1>

      {
        Product.map((product)=>{
          const {id,image , title, price} = product;
          return(
            <div className='flex items-center justify-between bg-white rounded-lg shadow-xl py-4 px-6' key={id}>
              <img className='w-24 h-24 bg-cover' src={image} alt="" />
              <h4 className='text-gray-700 text-lg'>{title}</h4>
              <h5 className='font-medium'>{price}$</h5>
              <button onClick={()=> handleRemove(id)} className='btn text-white'>remove</button>
            </div>
          )
        })
      }
      <ToastContainer />
    </div>
  )
}

export default Cart