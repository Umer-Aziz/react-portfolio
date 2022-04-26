import React, { useState } from 'react'
import UseStateObject from './UseStateObject';

const ShortCirEvolution = () => {


    let [Name , setName] = useState("");

  return (
    
    <div className='my-10'>
    <h1>Short Circuit Evalution..</h1>
        <section className='text-center'>{ Name || <UseStateObject/> }</section>
        <h1 className='text-h1 text-center'>{ Name || "Umer Aziz" }</h1>
        <p className='mt-4 h-1 w-full bg-gray-600 rounded'></p>
    </div>
  )
}

export default ShortCirEvolution