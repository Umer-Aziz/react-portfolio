import React ,{useReducer} from 'react'

const initialState = 0;
const reducer =(state ,action)=>{
    if (action.type === "Inc") {
        return state + 1;
    }
    if (action.type === "Dec") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <div className='my-20 flex flex-col justify-center'>
    <h1 className='my-3'>UseReducer hook</h1>
        <h1 className='text-center'>{state}</h1>
        <button className='btn' onClick={()=> dispatch({type:"Inc"})}>Inc</button>
        <button className='btn' onClick={()=> dispatch({type:"Dec"})}>Dec</button>
    </div>
  )
}

export default UseReducer