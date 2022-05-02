import React, { useEffect, useState } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const dispatch = useDispatch();
    const [ products , setProducts ] = useState([]);

    useEffect(()=>{

        const fetchProduct =async ()=>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data =await res.json(); 
            setProducts(data);
        }
        fetchProduct();

    },[]);

    const handleAdd = (products)=> {
      dispatch(add(products));
      toast.success("Product added Successfully.😊",{
        autoClose: 3000,
      });
    }
     
  return (
    <div className='my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
           products.map((products)=>{
               return(
                   <div className='hover:scale-105 duration-300 flex flex-col justify-center items-center py-4 px-6 bg-white rounded-xl shadow-xl' key={products.id}>
                       <img className='h-36 w-36 bg-cover' src={products.image} alt="" />
                       <h4 className='py-2 text-gray-600'>{products.title}</h4>
                       <h5 className='font-medium'>{products.price}$</h5>
                       <button onClick={()=>handleAdd(products)} className='btn text-white'>Add to cart</button>
                   </div>
               )
           }) 
        }
        <ToastContainer />
    </div>
  )
}

export default Products