import React,{useEffect,useState} from 'react'
import { useActionData, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { categore } from '../data';
import Footer from './Footer.jsx';

function ProductCard({onDeleteProd,onProductAdd,cart}) {
  const [dis,setDis] = useState(true)
  const [count,setCount] = useState(0)
  const param = useParams()
  const [prod,setProd] = useState(null)
  useEffect(()=>{
    let item = categore.filter((cat)=>{
      return cat.id === parseInt(param.id)
    })
   
    setProd(item[0])
  },[])
  useEffect(()=>{
    let exists =  cart.find((product)=> product.id === prod?.id)
    if(exists){
     setDis(!true)
     setCount(exists.quantity)
    }else{
    setDis(!false)
    setCount(0)
    }
  },[cart])
  
  const exist = ()=>{
  
  }
  
  return (
    <>
    <div className='w-[90vw] mx-auto flex flex-row items-center justify-center h-[100%] mb-[35vh] '>
      <div className='flex flex-col gap-1 md:flex-row w-[80vw] shadow-md '>
      <div className='md:max-h-[50%] max-h-[30%] ' >
        <img className='m-1 object-scale-down' src={prod?.img} alt="" />
     </div>
     <div className='flex flex-col gap-2 justify-center items-center w-1/2 mx-auto'>
          <h1 className='text-2xl font-extrabold text-nowrap'>{prod?.name}</h1>
             <h1>{prod?.desc}</h1>
            {prod && <button className={`p-1 border-2 text-white font-extrabold flex flex-row items-center gap-1 bg-slate-300 `} onClick={()=>onProductAdd(prod)}>Add to Cart({count})<FaPlus /></button>}
          {prod &&  <button className={`p-1 border-2 bg-slate-300 ${dis? "hidden" : ""} `} onClick={()=>onDeleteProd(prod)} disabled={dis}><FaMinus/></button>}
     </div>
     </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default ProductCard