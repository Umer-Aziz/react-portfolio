import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {

    const [ user , setUser ] = useState([]);
    const [ loading , setLoading ] = useState(true);

    const getUsers =async ()=>{

       try {
        setLoading(false);
        const response =await fetch('https://api.github.com/users');
        setUser(await response.json());
       } catch (error) {
           setLoading(false);
           console.log("Error is: " ,error);
       }
    }
    
    useEffect(()=>{
        getUsers();
    },[]);

    if(loading) {
        return (
            <>
                <div>
                    <h1>Loading...</h1>
                </div>
            </>
        )
    }

  return (
    <>
    <div className='bg-blue-300 min-h-screen w-screen'>
    <div className='max-w-7xl mx-auto px-6 md:px-8 2xl:px-0 py-4'>
        <h1 className='text-center w-full'>List of Github Users</h1>
        <div className='py-20 grid md:grid-cols-3 gap-y-10 gap-x-6'>

         {
             user.map((data)=>{
                 return (
                     <>
                     <div className='bg-white py-6 px-4 text-gray-800 rounded flex' key={data.id}>
            <img className='w-2/5 mr-3 w-28' src={data.avatar_url} alt="" />
            <div className='w-3/5'>
                <h5 className='text-2xl font-medium text-green-500'>{data.login}</h5>
                <p className='my-2 font-medium text-gray-500 md:w-[30px]'>{data.html_url}</p>
                <div className='p-2 flex bg-gray-100 justify-between rounded'>
                    <p className='grid'>
                        <span className='text-gray-500'>Articles</span>
                        <span className='text-center font-bold'>38</span>
                    </p>
                    <p className='grid'>
                        <span className='text-gray-500'>followers</span>
                        <span className='text-center font-bold'>596</span>
                    </p>
                    <p className='grid'>
                        <span className='text-gray-500'>Ratings</span>
                        <span className='text-center font-bold'>4.8</span>
                    </p>
                </div>
            </div>
        </div>

                     </>
                 )
             })
         }

        </div>
        </div>
        </div>
    </>
  )
}

export default UseEffectApi