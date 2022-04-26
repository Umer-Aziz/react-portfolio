import React ,{useRef, useState} from 'react'



// unContorolled 
const UseRef = () => {

  let name = useRef(null);

  const [show , setShow ] = useState(false);

  const FormHandler = (e)=>{
    e.preventDefault();
    let input = name.current.value;
    input === " " ? alert("Enter Your Name..") : setShow(true);
    
   }

  return (
    <div className='py-10'>
    <h1>Uncontrolled form with useRef  Hook</h1>
        <form className='bg-blue-400 py-10 px-5 rounded' onSubmit={FormHandler}>
          <div className='grid'>
            <label htmlFor="name" className='py-2'>Enter Your name..</label>
              <input type="text" id="name" placeholder='Name' ref={name}/>
            <button type="submit" className='py-2 bg-red-500 hover:bg-red-600 mt-5 rounded'>Submit</button>
          </div>
        </form>

        <div>
          <p className='mt-4'>{show ? `your name is ${name.current.value}` : " "}</p>
        </div>
        <p className='h-1 w-full bg-gray-600 rounded'></p>
    </div>
  )
}

export default UseRef