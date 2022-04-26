import React , {useEffect, useState} from 'react'

const UseEffects = () => {
    const [count, setCounter] = useState(0);

    useEffect(()=>{
        if (count >= 1 ){
            document.title = `Chats (${count})`;
        }
        else {
            document.title = `Chats`;
        }
    },[count]);

  return (
    <div className='my-10'>
    <h1>UseEffect</h1>
        <h1 className='text-center'>{count}</h1>
        <button className='btn' onClick={()=>setCounter(count + 1)}>Count</button>
        <p className='mt-4 h-1 w-full bg-gray-600 rounded'></p>
    </div>
  )
}

export default UseEffects