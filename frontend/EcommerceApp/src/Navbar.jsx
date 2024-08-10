import React,{useState,useEffect,useContext} from 'react'
import { NavLink ,useNavigate,Link } from 'react-router-dom'
import Logo from "./utils/Logo.png"
import {IoSearchSharp} from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { userContext } from './UserContext.jsx';
import { MdCancel } from "react-icons/md";
// import { Link } from 'react-router-dom';

function Navbar({cart}) {
    const [isOpen,setIsOpen]= useState(false)
    const UserCon = useContext(userContext)
    const navigate = useNavigate()
    // useEffect(()=>{
    //     console.log(UserCon)
    // })


const handleLogOut = (e)=>{
    e.preventDefault()
    sessionStorage.clear()
    UserCon.setUser(null)
}

  return (
    <div className='p-1 relative'>
        <div className={`${isOpen? "pl-2 absolute top-0 left-0 h-screen w-1/3 bg-slate-100 z-40" :"hidden"} border-2 border-slate-300 md:hidden`}>
        <MdCancel className='text-right p2 absolute top-2 right-2' onClick={()=>setIsOpen(false)}/>
        <div className='flex flex-col gap-3 items-start mt-16'>
           <NavLink onClick={()=>setIsOpen(false)} className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":"hover:scale-110"} to={"/"}>Home</NavLink>
           <NavLink onClick={()=>setIsOpen(false)} className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":"hover:scale-110"} to="/cart">Cart</NavLink>
           <NavLink onClick={()=>setIsOpen(false)} className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":"hover:scale-110"} to ="/login" >Login</NavLink>
           <NavLink onClick={()=>setIsOpen(false)} className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":"hover:scale-110"} to="/register" >Register</NavLink>
        </div>
        </div>
        
       
    <div className='flex flex-row justify-between '>
    <div onClick={()=>setIsOpen(opem=>!opem)} className='md:hidden flex items-center'>
        <GiHamburgerMenu/>
        </div>
        <Link to="/"><div className='hidden sm:block'>
            <img className='w-24  h-full' src={Logo} alt="" />
        </div></Link>
        <div className='hidden md:flex flex-row gap-3 items-center'>
           <NavLink className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":""} to={"/"}>Home</NavLink>
           <NavLink className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":""} to="/cart">Cart ({cart.length})</NavLink>
           <NavLink className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":""} to ="/about" >About</NavLink>
           <NavLink className={({isActive})=>isActive? "border-b-2 border-slate-500 p-1":""} to="/services" >Services</NavLink>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
        <Link to="/shop"><IoSearchSharp /></Link>
        <FaRegHeart/>
        <Link to="/cart"><AiOutlineShoppingCart/></Link>
       
        {UserCon.user ? <button onClick={handleLogOut} className='border-2 rounded-md border-slate-600 bg-slate-300 px-2'>Sign Out </button>: <button onClick={()=>navigate("/login")}  className='border-2 rounded-md border-slate-600 bg-slate-300 px-2'>Sign In </button>}
        </div>
    </div>
    </div>
  )
}

export default Navbar
