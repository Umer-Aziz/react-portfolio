import React, {useEffect, useState} from 'react'
import book from "../../img/book.png"

import {MdDeleteForever} from "react-icons/md";
import {FiEdit} from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoLocal = () => {

    // to get item from localStorage

    const getLocalItems = ()=>{
        let list = localStorage.getItem('listItems');

        if(list){
            return JSON.parse(localStorage.getItem("listItems"));
        }
        else{
           return [];
        }
    }

    const [Input, SetInput] = useState('');
    const [Item, SetItems] = useState(getLocalItems());
    const [toggle , setToggle ] = useState(true);
    const [isEditItem , setIsEditItem] = useState(null);


    const addItem = () =>{
         
        if (!Input){
            toast.error("Please Enter Item",{
                position:'top-center',
              });
        }
        else if (Input && ! toggle){
          SetItems(
              Item.map((elem)=>{
                if (elem.id === isEditItem ){
                    return {...elem, name:Input};
                }
                return elem;
              })
          )
        setToggle(true);
        SetInput('');
        setIsEditItem(null);
        }
        else {
            const AllInputData ={id:new Date().getTime().toString(),name:Input}
            SetItems([...Item,AllInputData]);
            SetInput("");
        }
    }

    const DeleteItem =(index)=>{
     const Data = Item.filter((elem)=>{
         return index !==elem.id;
     })
     SetItems(Data);
     toast.info("Item Deleted..",{
        position:'top-right',
      });
    }

    const EditItem = (id)=>{

        const newItem = Item.find((elem)=>{
            return elem.id === id ;
        })
        setToggle(false);
        SetInput(newItem.name);
        setIsEditItem(id);
    };

    const ClearAll = ()=>{
        SetItems([]);
        toast.success("All Items are Clear",{
            position:'bottom-center',
            hideProgressBar:true
          });
    }

    // add Item to localStorage
    useEffect(()=>{
        localStorage.setItem('listItems',JSON.stringify(Item));

    },[Item]);

    
  return (
      <>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='-mt-40 mb-10'>Todo App with LocalStorage</h1>
            <img className='w-20' src={book} alt="" />
            <p>Add your list here ✌</p>
            <div className='mt-6'>
                <input value={Input} onChange={(e)=>SetInput(e.target.value)} className='text-gray-800 p-2 w-80 rounded' type="text" placeholder='✍ Add items..'/>
                
                {
                    toggle ? <button className='ml-2 bg-green-600 hover:bg-white hover:text-gray-800 py-2 px-4 rounded' onClick={addItem}>add</button>
 : <button className='ml-2 bg-red-600 hover:bg-white hover:text-gray-800 py-2 px-4 rounded' onClick={addItem}>Edit</button>

                }
                
            </div>
            {
                Item.map((data)=>{
                    return (
                    <div key={data.id} className='mt-6 bg-green-600 hover:bg-white hover:text-gray-800 flex justify-between items-center p-3 w-96 rounded'>
                    <p>{data.name}</p>
                    <div className='flex gap-x-4'>
                    <FiEdit className='cursor-pointer text-xl hover:text-green-500' title='Edit' onClick={()=>EditItem(data.id)}/>
                    <MdDeleteForever className='cursor-pointer text-xl hover:text-red-500' title='Delete' onClick={()=>DeleteItem(data.id)}/>
                    </div>
                   </div>
                    )
                })
            }
            {
                Item.length > 1 ?
                 <button className='my-5 bg-white text-gray-800 hover:opacity-80 py-3 w-32 rounded' 
                 onClick={ClearAll}>Remove All</button>
                 : ""

            }
            <ToastContainer />
        </div>
    </div>
    </>
  )
}

export default TodoLocal