import React, { useState } from 'react'
import UseStateObject from './UseStateObject';

const ShortCirEvolution = () => {


    let [Name , setName] = useState("");

  return (
    <div>
        <section className='text-center'>{ Name || <UseStateObject/> }</section>
        <h1 className='text-h1 text-center'>{ Name || "Umer Aziz" }</h1>
    </div>
  )
}

export default ShortCirEvolution