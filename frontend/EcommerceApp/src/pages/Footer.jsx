import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-3 bg-slate-400 items-center justify-center w-screen h-[30vh] bottom-0 text-white mt-8' >
        <div className='col-span-2 border-r-2 flex justify-between pr-6 border-white'>
            <div className='p-1 self-end text-nowrap'>Copyright HIC &copy; 2024</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>    
        </div>
        <div>
        
        </div>
    </div>
  )
}

export default Footer