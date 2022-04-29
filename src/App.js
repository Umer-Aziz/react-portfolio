import React from 'react'

import { Inc, Dec ,Divide , Multi } from './actions/Action';
import {useSelector , useDispatch } from "react-redux";

const App = () => {
  const state = useSelector( (state)=> state.ChangeNumber );
  const Mstate = useSelector( (state)=> state.MultiDiv );
  const dispatch = useDispatch();
  return (
    <>
    <div className='-mt-40'>
      <h1 className='uppercase text-4xl text-center'>Redux</h1>
      <h1>Increment & Decrement Counter</h1>
      <div className='mt-10 flex justify-center gap-x-4'>
        <button title='Decrement' onClick={()=> dispatch(Dec(3))} className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded'>-</button>
        <input className='w-10 text-center text-xl' type="text" value={state}/>
        <button title='Increment' onClick={()=> dispatch(Inc(2))} className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded'>+</button>
      </div>
    </div>
    <div className='mt-40'>
      <h1 className='uppercase text-4xl text-center'>Redux</h1>
      <h1 className='text-center'>Divider & Multiplication</h1>
      <div className='mt-10 flex justify-center gap-x-4'>
        <button title='Decrement' onClick={()=> dispatch(Divide(5))} className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded'>/</button>
        <input className='w-10 text-center text-xl' type="text" value={Mstate}/>
        <button title='Increment' onClick={()=> dispatch(Multi(2))} className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded'>*</button>
      </div>
    </div>
    </>
  );
}

export default App