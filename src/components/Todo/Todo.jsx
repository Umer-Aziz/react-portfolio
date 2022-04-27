import React, {useState} from 'react'
import book from "../../img/book.png"

import {MdDeleteForever} from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const [Input, SetInput] = useState('');
    const [Item, SetItems] = useState([]);


    const addItem = () =>{
         
        if (!Input){
            
        }
        else {
            SetItems([...Item,Input]);
            SetInput("");
        }
    }

    const DeleteItem =(id)=>{
     const Data = Item.filter((elem,ind)=>{
         return ind !==id;
     })
     SetItems(Data);
     toast.info("Item Deleted..",{
        position:'top-right',
      });
    }
    const ClearAll = ()=>{
        SetItems([]);
        toast.success("All Items are Clear",{
            position:'bottom-center',
            hideProgressBar:true
          });
    }
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-20' src={book} alt="" />
            <p>Add your list here ✌</p>
            <div className='mt-6'>
                <input value={Input} onChange={(e)=>SetInput(e.target.value)} className='text-gray-800 p-2 w-80 rounded' type="text" placeholder='✍ Add items..'/>
                <button className='ml-2 bg-yellow-600 py-2 px-4 rounded' onClick={addItem}>add</button>
            </div>
            {
                Item.map((data ,ind)=>{
                    return (
                    <div key={ind} className='mt-6 bg-yellow-600 flex justify-between items-center p-3 w-96 rounded'>
                    <p>{data}</p>
                    <MdDeleteForever className='cursor-pointer' onClick={()=>DeleteItem(ind)}/>
                   </div>
                    )
                })
            }
            <button className='my-5 bg-white text-gray-800 hover:opacity-80 py-3 w-32 rounded' onClick={ClearAll}>Remove All</button>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Todo