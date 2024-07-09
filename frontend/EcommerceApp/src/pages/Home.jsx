import React from 'react'
import header from "../utils/Header.png"
import { category,categore } from '../data.jsx'
import ProductCard from './ProductCar.jsx'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

function Home() {
  return (
    <>
    <div className='p-1 bg-slate-100'>
    <div className='p-1 flex items-center justify-center mx-auto mb-10 md:mb-24'>
        <img src={header} alt="" />
    </div>
    <div className='flex flex-col items-center justify-center mx-auto w-4/5'>
       <div className='font-bold md:text-3xl  text-xl p-4 text-slate-400 text-center'>Shop By Categories</div> 
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
            {
                category.map((cat)=>{
                    return (
                        <Link to="/shop">
                        <div className='relative w-4/5 my-3 md:w-4/5 lg:w-3/5 mx-auto mb-6 max-h-1/2 object-cover rounded-md'>
                            <img className='max-h-fit h-[40vh] w-[100%] object-cover rounded-md' src={cat.img} alt="" />
                            <p className='absolute bottom-2 left-1 font-semibold text-black bg-white rounded-md p-1'>{cat.name}</p>
                            <p className='absolute top-0 right-0 text-white bg-lime-600 rounded-md p-1 '>{cat.off}</p>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
              <div className='font-bold text-3xl p-4 text-center text-slate-400 mt-[10vh]'>
                    Our BestSellers
             </div>
             <div className='gap-2 flex flex-row overflow-auto w-[100%] p-2 mt-[5vh] '>
            {
                categore.map((cat)=>{
                    return (<>
                 <Link to={`product/${cat.id}`}>   <div className='relative'>
                             <img className='md:min-w-[20vw] min-w-[50vw] h-[30vh] object-cover ' src={cat.img} alt="" />
                            <div className=''> 
                                     <div>
                                       Desc
                                      </div>
                                     <h1>Price</h1>
                             </div>
             <div className='absolute left-2 bottom-12'><Rating name="half-rating" defaultValue={5} readOnly precision={0.5} /></div>
         </div></Link>
                    </> )
                })
            }
        </div>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Home