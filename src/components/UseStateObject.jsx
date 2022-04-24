import React , {useState} from 'react'

const UseStateObject = () => {

  const [Obj, setObj] = useState({
    Name:"Umer" , Age:25 , Degree:"BSE",
  });
  return (
    <div>
      <h1 className='text-h1'>Name: {Obj.Name} & Age: {Obj.Age} & Degree: {Obj.Degree}</h1>
      <button className="btn" onClick={()=>setObj({...Obj,Name:"Zain",Age:44})}>Update</button>
    </div>
  )
}

export default UseStateObject