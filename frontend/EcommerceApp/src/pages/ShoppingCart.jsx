import React,{createContext,useEffect,useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import Footer from './Footer.jsx'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ShoppingCart({cart,onProductAdd,onDeleteProd}) {
  const navigate = useNavigate()
  useEffect(()=>{
    // console.log(cart)
  })

  const handleClic = async()=>{
    const User = await JSON.parse(sessionStorage.getItem("Site-user"))
    if(!User){
      toast.error("Kindly login")
      setTimeout(()=>navigate("/login"),1000)
    }else{
      navigate("/checkout")
    }
  }
  return cart.length > 0?(
    <div className='max-w-[90%] mt-12 mx-auto flex flex-col gap-1 items-center justify-center'>
      {
        cart.map((prod)=>{
          return (<>
          <div className='flex flex-row justify-between gap-6 max-h-[20vh] py-2 object-cover border-b-2 w-[90vw] mx-auto'>
            <img className='max-w-[40%] md:max-w-[100%]' src={prod.img} alt="" />
            <FaPlus onClick={()=>onProductAdd(prod)}/>
            <FaMinus onClick={()=>onDeleteProd(prod)}/>
            <h1>({prod.quantity})</h1>
            <h1>{prod.quantity * prod.price}</h1>
          </div>
          </>)
        })
      }
      <div className='flex flex-row gap-2 mt-8'>
       <h1 className='font-extrabold'>Total =</h1> {
         cart.length > 0 && cart.reduce((total,prd)=>{
            return total + prd.price * prd.quantity
          },0)
        }
      </div>
      <button className='text-center border-2 bg-slate-400 text-white rounded-md p-3 mt-8 mb-[20vh] ' onClick={handleClic}>
        Proceed to CheckOut
      </button>
     <Footer/>
    </div>
  ):(<h1 className='flex items-center justify-center h-[90vh]'>Kindly add to your Shopping Cart</h1>)
}

export default ShoppingCart