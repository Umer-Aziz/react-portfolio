import React , {useState} from 'react'

const UseStateObject = () => {

  const [Obj, setObj] = useState({
    Name:"Umer" , Age:25 , Degree:"BSE",
  });
  return (
    <div className='py-10'>
    <h1>useState with Object...</h1>
      <h1 className='text-h1'>Name: {Obj.Name} & Age: {Obj.Age} & Degree: {Obj.Degree}</h1>
      <button className="btn" onClick={()=>setObj({...Obj,Name:"Zain",Age:44})}>Update</button>
      <p className='mt-4 h-1 w-full bg-gray-600 rounded'></p>

    </div>
  )
}

export default UseStateObject