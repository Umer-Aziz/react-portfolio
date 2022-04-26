import React,{useState , useEffect } from 'react'

const Cleanup = () => {
    const [CountWidth, setCountWidth] = useState(window.screen.width);

    const actualWidth =()=>{
        setCountWidth(window.innerWidth);
    }

    useEffect(() => {
      window.addEventListener("resize",actualWidth);

      return () =>{
        window.removeEventListener("resize",actualWidth);

      }
    })
    
  return (
    <div className='my-10'>
    <h1>UseEffect with CleanUp...</h1>
        <p>The Size of Window is :</p>
        <h1>{CountWidth}px</h1>
        <p className='mt-4 h-1 w-full bg-gray-600 rounded'></p>
    </div>
  )
}

export default Cleanup