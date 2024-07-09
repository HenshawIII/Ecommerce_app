import React from 'react'
import { Link } from 'react-router-dom'
import { categore } from '../data'

function ShopListings() {
  return (
    <div>
     <div className='text-center'>
     Filter By :<select name="" id="">
                    <option></option>
                    <option value="volvo">Size</option>
                    <option value="saab">Men</option>
                    <option value="mercedes">Women</option>
                    <option value="audi">Accessories</option>
               </select>
      </div> 
       <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
            {
                categore.map((cat)=>{
                    return (
                        <Link to={`/product/${cat.id}`}>
                        <div className='relative w-4/5 my-3 md:w-4/5 lg:w-3/5 mx-auto mb-6 max-h-1/2 object-cover rounded-md'>
                            <img className='max-h-fit h-[40vh] w-[100%] object-cover rounded-md' src={cat.img} alt="" />
                            {/* <p className='absolute bottom-2 left-1 font-semibold text-black bg-white rounded-md p-1'>{cat.name}</p> */}
                            <p className='absolute top-0 right-0 text-white bg-lime-600 rounded-md p-1 '>{cat.price}</p>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ShopListings