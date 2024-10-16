import { Alert, Button, Label, Spinner, TextInput, Textarea } from 'flowbite-react'
import { set } from 'mongoose';
import React, { useState } from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
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
            <Link to='/' className="  text-5xl  font-bold ">
            <span className="px-2 py-1 bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 rounded-xl text-white ">Reactfull</span>
             Minds
            </Link>
            <p className='mt-4 text-gray-500 text-sm'>
              Welcome To a Interactive Blogging Platform,
              <span className='flex gap-1'>
               Keep Sharing Your Thoughts<span className='flex justify-center items-center text-red-400'>
               <FaHeart/>
               </span>
              </span>
            </p>
          </div>

          <div className='flex-1 px-5'>


             <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                 
                 
                 <div className='flex flex-col ' >
                  <Label value='Your Username:'className='mb-1'/>
                  <TextInput 
                    type='text'
                    placeholder='Username'
                    id='username'
                    onChange={changeHandler}
                  />
                  </div>
                  
                  <div className='flex flex-col '>
                  <Label value='Your Email:'className='mb-1'/>
                  <TextInput 
                    type='email'
                    placeholder='abcd@gmail.com'
                    id='email'
                    onChange={changeHandler}
                  />
                  </div>

                  <div className='flex flex-col '>
                  <Label value='Your Password:'className='mb-1'/>
                  <TextInput 
                    type='password'
                    placeholder='Password'
                    id='password'
                    onChange={changeHandler}
                  />
                  </div>

                  
                  
                  <Button gradientDuoTone="redToYellow" type='submit'>
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


             <div className='flex gap-2 mt-5 mb-5 text-sm'>
                <span>Have an account?</span>
                <Link to='/signin' className='text-blue-500'>Signin</Link>
             </div>

             {
                errorMessage &&(
                <Alert color="failure" icon={HiInformationCircle} className='max-h-11 rounded-lg py-1 px-2 bg-red-100 font-bold items-center justify-center'>
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
