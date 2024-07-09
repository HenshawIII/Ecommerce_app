import React,{useState,useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate,Link } from 'react-router-dom'
import Logo from '../utils/Logo.png'
import AuthImg from "../utils/AuthImage.png"
import Login from './Login.jsx'


axios.defaults.withCredentials = true


function Register() {

  const [values,setValue] = useState({
    name:"",
    email:"",
    password:"",
    confam:""
  })
 
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {name,email,password,confam} = values;
    if(!name || !email || !password || !confam){
    return toast.error("Kindly complete all fields")
    }
    else if(password !== confam){
     return toast.error("Passwords do not match")
    }
    else if(password.length < 7){
     return toast.error("Password length must be greater than 6")
    }
    else{
      await axios.post("https://ecommerce-app-heh9.onrender.com/register",values)
      .then(data=>{
        console.log(data)
        if(data.data.error){
          toast.error(data.data.error)
        }else{
          toast.success(data.data.data)
          navigate("/login")
        }
        })
      
      setValue({
        name:"",
        email:"",
        password:"",
        confam:""
      })
    }
  }


  return (
    <div className='flex flex-row h-screen items-center justify-center'>
        <div className='w-1/2 hidden sm:block'>
                <img src={AuthImg} alt="" />
         </div>
         <div className='flex flex-col h-3/4 w-5/6 sm:w-1/2 rounded-xl p-2 items-center justify-center'>
            <div className='flex flex-row items-center mb-10'>
              <img className='w-20 mx-2 ' src={Logo} alt="Loggo"  />
             
            </div>
            <form className='flex flex-col w-5/6 mb-3' onSubmit={e=>handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input className="p-1 text-gray-900 rounded-md mb-5 border-b-2 "  value={values.name} onChange={e=>setValue({...values,name:e.target.value})} type="text" id='name' />

            <label htmlFor="email">Email</label>
            <input className="p-1 text-gray-900 rounded-md mb-5  border-b-2" value={values.email} onChange={e=>setValue({...values,email:e.target.value})} type="email"  id='email' />

            <label htmlFor="password">Password</label>
            <input className="p-1 text-gray-900 rounded-md mb-5 border-b-2 " value={values.password} onChange={e=>setValue({...values,password:e.target.value})} type="text" id='password' />
            
            <label htmlFor="confam">Confirm Password</label>
            <input className="p-1 text-gray-900 rounded-md mb-8 w-full border-b-2" value={values.confam} onChange={e=>setValue({...values,confam:e.target.value})} type="text"  id='confam' />

            <input className='w-1/3 text-white bg-slate-400 rounded-md mx-auto border-2 border-gray-950' type="submit" value="Submit" />
            </form>
            <p>Already a User ? Kindly <Link to={'/login'} className='p-1 text-sky-500 mt-3 border-b-2 border-sky-600'>Login</Link></p>
         </div>
         
    </div>    
  )
}

export default Register