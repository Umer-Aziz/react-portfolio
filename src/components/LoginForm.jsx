import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const FormHandler =(e)=>{
        e.preventDefault();
        
        if ( email && password ) {
        const newEntry = {id:new Date().getTime().toString(),email ,password};
        setAllEntry([...allEntry , newEntry]);
        console.log(allEntry);
        setEmail("");
        setPassword('');
        }else {
            alert("Please Fill the data in the form");
        }
        

    }

  return (
    <>
    <div className='my-10'>
    <h1>Login Controlled Form</h1>
        <form action="/" className='grid gap-y-4 p-10 rounded bg-blue-500' onSubmit={FormHandler}>
           <div className='grid'>
               <label htmlFor="email">Email</label>
               <input  type="text" name='email' id='email' autoComplete='off' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
           </div>
           <div className='grid'>
               <label htmlFor="password">Password</label>
               <input type="password" name='password' id='password' autoComplete='off' placeholder='Password' value={password} onChange={(e)=>  setPassword(e.target.value)}/>
           </div>
               <button type="submit" className='py-2 bg-green-500 rounded hover:bg-green-600'>Submit</button>
        </form>
        <div>
            {
                allEntry.map((data)=>{
                    const { id , email , password } = data;
                    return (
                      <div className='text-h1 flex justify-between w-[50rem]' key={id}>
                        <span>{email}</span>
                        <span>{password}</span>
                      </div>
                    )
                })
            }
        </div>
        <p className='mt-4 h-1 w-full bg-gray-600 rounded'></p>

        </div>
    </>
  )
}

export default LoginForm