import React, { useState } from 'react';
import Menu from "./Menu";
import img from "../../img/chola.jpg"

const Gallery = () => {
    const [items,setItems] = useState(Menu);

    const filterItem = (category)=>{

        const updatedItem  =Menu.filter((elem)=>{
            return elem.category === category;
        })
        setItems(updatedItem);

    }
  return (
    <div className='absolute inset-0 min-h-screen w-screen'>
        <h1 className='py-5 capitalize text-center border-b border-gray-600'>Order your Favourite dish</h1>
        <div className='my-5 px-8 max-w-7xl mx-auto'>
            <div className='flex justify-around'>
                <button className='btn-pink' onClick={()=>filterItem('breakfast')}>Breakfast</button>
                <button className='btn-pink' onClick={()=>filterItem('lunch')}>Lunch</button>
                <button className='btn-pink' onClick={()=>filterItem('evening')}>Evening</button>
                <button className='btn-pink' onClick={()=>filterItem('dinner')}>Dinner</button>
                <button className='btn-pink' onClick={()=>setItems(Menu)}>All</button>
            </div>
            <div className='mt-20 my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6'>

              {
                  items.map((data)=>{
                   
                    const {id,image,name,description,price} = data;

                      return(
                        <div className='Item bg-white rounded-lg shadow-xl text-gray-700 flex' key={id}>
                   <img className='w-4/12' src={img} alt={name} />
                   <div className='w-8/12 p-4'>
                       <h2 className='text-lg font-semibold'>{name}</h2>
                       <p className='text-sm'>{description}</p>
                       <div className='mt-5 flex justify-between items-center'>
                           <span className='text-teal-500 font-medium'>Price : {price}</span>
                           <button className='p-2 text-sm text-white bg-teal-500 hover:bg-teal-600 rounded'>Order Now</button>
                       </div>
                       <p className='mt-3 text-sm text-gray-600'>*Prices may vary on selected date.</p>
                   </div>
                </div>
                      )
                  })
              } 

            </div>
        </div>
    </div>
  )
}

export default Gallery