import React ,{ useContext  } from 'react';
import { BioData } from './ComA'
import { useNavigate  } from 'react-router-dom';
const ComC = () => {
    const name = useContext(BioData);
    const history = useNavigate();
  return (
    <div>
    <h1 className='my-2'>Prop Drilling, Context API - useContext</h1>
        <h1 className='text-h1'>ComC - {name}</h1>
        <h1 className='my-2'>useNavigate..</h1>
        <button className='btn' onClick={() => history(-1)}>Go Back</button>
        <button className='ml-3 btn' onClick={() => history('/useffectapi')}>Go UseEffectApi page</button>

    </div>
  )
}

export default ComC