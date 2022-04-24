import React, { useState } from 'react'

const UseStateArray = () => {

    const Array = [
        {
            id:0, Name:"Umer Aziz" , Age:24
        },
        {
            id:1, Name:"Mr Robot" , Age:25
        },
        {
            id:2, Name:"Mr Developer" , Age:28
        },
    ]

    let [MyArray , setArray] = useState(Array);

    const RemoveArray = (id)=>{
        const myNewArray = MyArray.filter((CurrEl) =>{
            return CurrEl.id !== id;
        })
        setArray(myNewArray);
    }

  return (
    <div className=''>

    {
        MyArray.map((data)=> {
            return(
                <h1 className='text-h1' key={data.id}>Name : {data.Name} & Age : {data.Age}
                <button className="btnRed" onClick={()=>RemoveArray(data.id)}>remove</button>
                </h1>
            );
        } )
    }
     <button className='btn' onClick={()=>setArray([])}>Clear All</button>
    </div>
  )
}

export default UseStateArray