import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReactToastify = () => {

  const notify = () => toast("Wow so easy!");

  const showToastTop = ()=>{
    toast.success("Wow so easy!",{
      position:'top-center',
      hideProgressBar:true,
    });
  
  }
  const showToastLeft = ()=>{
    toast.dark("Wow so easy!",{
      position:'top-left',
      hideProgressBar:true,
    });
  
  }
  return (
    <div>
      <h1 className=''>ReactToastify</h1>
      <button className='btn' onClick={notify}>Toast Top Left</button>
      <button className='btn ml-2' onClick={showToastTop}>Toast Top Center</button>
      <button className='btn ml-2' onClick={showToastLeft}>Toast Top left</button>
      <ToastContainer />
    </div>
  )
}

export default ReactToastify