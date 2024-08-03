import { Alert, Button, Label, Spinner, Textarea } from 'flowbite-react'
import { set } from 'mongoose';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signup = () => {
    const [errorMessage,seterrorMessage] = useState(null);
    const [loading,setLoading] =useState(false);
    const[formData,setformData] = useState({});
    const navigate=useNavigate();
    const changeHandler=(e)=>{
        setformData({...formData,[e.target.id]:e.target.value.trim() })
    }
    
    const handleSubmit= async (e) => {
        e.preventDefault();
        if(!formData.username || !formData.password || !formData.email){
          seterrorMessage('Please Fill Every Field !');
        }
        try{
           setLoading(true); 
           seterrorMessage(null); 
           const res = await fetch("/api/auth/signup",{
            method:'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
           }); 
           const data =await res.json();

           if(data.success === false){
                setLoading(false);
                return seterrorMessage(data.message);
           }
           setLoading(false);
           if(res.ok){
            return navigate('/signin');
           }
        }catch(error){
            setLoading(false);
        }
    } 


  return (
    <div className='min-h-screen mt-20'>
       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ' >
          <div className='flex-1 '>
            <Link to='/' className="  text-4xl  font-bold ">
            <span className="px-2 py-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-xl text-white ">Reactfull</span>
             Minds
            </Link>
            <p className='mt-2 text-gray-500 text-sm'>
              Interactive Blogging Platform for Sharing and Reacting to Posts.
            </p>
          </div>

          <div className='flex-1 px-5'>


             <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                 
                 
                 <div className='flex flex-col '>
                  <Label value='Your Username:'/>
                  <Textarea
                    className='border border-slate-300 rounded-lg resize-none h-12 outline-none px-2 py-1 text-xl bg-slate-100' 
                    type='text'
                    placeholder='Username'
                    id='username'
                    onChange={changeHandler}
                  />
                  </div>

                  <div className='flex flex-col '>
                  <Label value='Your Email:'/>
                  <input
                   className='border border-slate-300 rounded-lg h-12 outline-none px-2 py-1 text-xl bg-slate-100'
                   type='email'
                   placeholder='name@company.com'
                   id='email'
                   onChange={changeHandler}
                  />
                  </div>

                  <div className='flex flex-col '>
                  <Label value='Your Password:'/>
                  <input
                   className='border border-slate-300 rounded-lg h-12 outline-none px-2 py-1 text-xl bg-slate-100'
                   type='password'
                   placeholder='Password'
                   id='password'
                   onChange={changeHandler}
                  />
                  </div>
                  
                  <Button className='bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 w-96 h-11 rounded-lg outline-none' type='submit'>
                    {
                        loading ? (
                            <>
                             <Spinner aria-label="Default status example" />
                             <span className='pl-3'>Loading...</span>
                            </>
                        ):("SignUp")
                    }
                  </Button>
             </form>


             <div className='flex gap-2 mt-5 text-sm'>
                <span>Have an account?</span>
                <Link to='/signin' className='text-blue-500'>Signin</Link>
             </div>

             {
                errorMessage &&(
                <Alert color="failure" className='mt-4 w-96 min-h-11 rounded-lg py-1 px-2 bg-red-100 font-bold items-center justify-center'>
                  {errorMessage}
                </Alert>
                )
             }
  

          </div>
       </div>
    </div>
  )
}

export default Signup
