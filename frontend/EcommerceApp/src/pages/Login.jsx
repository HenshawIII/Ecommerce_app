import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate,Link} from 'react-router-dom'
import Logo from '../utils/Logo.png'
import { userContext } from '../UserContext.jsx'


axios.defaults.withCredentials = true


function Login() {

  const [values,setValue] = useState({
    email:"",
    password:"",
  })
  const usrCon = useContext(userContext)
 
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {name,email,password,confam} = values;
  
      await axios.post("https://ecommerce-app-heh9.onrender.com/login",values)
      .then(data=>{
        console.log(data)
        if(data.data.error){
          toast.error(data.data.error)
        }else{
          // toast.success(data.data.data)
          sessionStorage.setItem("Site-user",JSON.stringify(data.data.user))
          usrCon.setUser(JSON.parse(sessionStorage.getItem("Site-user")))
        //   navigate("/setavatar")
        }
        })
      
      setValue({
        email:"",
        password:""
      })
    
  }


  return (
    <div className='flex  h-screen items-center justify-center'>
         <div className='flex flex-col h-3/4 mb-3 w-5/6 sm:w-1/2 rounded-xl p-2 items-center justify-center'>
            <div className='flex flex-row items-center mb-10'>
              <img className='w-20 mx-2 ' src={Logo} alt="Loggo" />
              
            </div>
            <form className='flex flex-col w-5/6 mb-3' onSubmit={e=>handleSubmit(e)}>
          
            <label htmlFor="email">Email</label>
            <input className="p-1  border-b-2 text-gray-900 rounded-md mb-5 " value={values.email} onChange={e=>setValue({...values,email:e.target.value})} type="email" id='email' />

            <label htmlFor="password">Password</label>
            <input className="p-1 border-b-2 text-gray-900 rounded-md mb-12 " value={values.password} onChange={e=>setValue({...values,password:e.target.value})} type="text" id='password' />
            
           
            <input className='w-1/3 text-white bg-slate-400 rounded-md mx-auto border-2 border-gray-950' type="submit" value="Submit" />
            </form>
            <Link className="font-extralight">Forgot Password ?</Link>
            <span className="font-extralight">Dont have an account yet? <Link to="/register" className='font-bold'>Sign Up</Link>  </span>
         </div>
    </div>    
  )
}

export default Login