import { useState } from 'react'
import { BrowserRouter,Route,Routes ,NavLink,Link} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProductCard from './pages/ProductCar.jsx'
import { Toaster } from 'react-hot-toast'
import { UserProvide } from './UserContext.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ShopListings from './pages/ShopListings.jsx'
import CheckOut from './pages/CheckOut.jsx'



function App() {
  const [cart, setCart] = useState([])

  const handleAddProd = (prod)=>{
    const exists =  cart.find((product)=> product.id === prod.id )
    if(exists){
      const updateCart = cart.map((product)=>{
        if(product.id === prod.id){
          return {
            ...product,
            quantity:product.quantity + 1
          }
        }
        return product
      })
      setCart(updateCart)
      // console.log("Adding")
    }else{
      setCart([...cart,{...prod,quantity:1}])
      // console.log("Adding")
    }
  }

  const handleProdDelete = (prod)=>{

    const exists =  cart.find((product)=> product.id === prod.id )
    console.log(exists)
    if(exists?.quantity === 1){
      // const index  = cart.findIndex((product)=>{
      //   return product.id === prod.id
      // })
      // console.log("deleting")
     const newCart = cart.filter((product)=>{
      return product.id !== prod.id
     })
     setCart(newCart)
    }else{
      const updateCart = cart.map((product)=>{
        if(product.id === prod.id){
  
          return {
            ...product,
            quantity:product.quantity - 1
          }
        }
        return product
      })
      setCart(updateCart)
    }
  } 


  return (
    <>
      <BrowserRouter>
      <UserProvide>
      <Navbar cart={cart}/>
      
      <Toaster position='bottom-right'  toastOptions={{duration:3000,pauseOnHover:true,autoClose:5000,theme:"dark"}} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/cart' element={<ShoppingCart cart={cart} onProductAdd={handleAddProd} onDeleteProd={handleProdDelete}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route  path='/product/:id' element={<ProductCard onProductAdd={handleAddProd} cart={cart} onDeleteProd={handleProdDelete}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/shop" element={<ShopListings/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      </UserProvide>
      </BrowserRouter>
    </>
  )
}

export default App
