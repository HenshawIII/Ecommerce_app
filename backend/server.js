import express from 'express'
import cors from 'cors'
import { hashPassword,comparePass } from './auth.js'
import bcrypt from 'bcrypt'
import { UsersDao } from './UsersDAO.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/register", async (req,res)=>{
    let {name,email,password} = req.body
    password = await hashPassword(password)
    const data = await UsersDao.RegisterUsers(name,email,password)
    if(data.error){
        return res.json({error:data.error})
    }else{
        return res.json({data:data.message})
    }
})

app.post("/login",async (req,res)=>{
    const {email,password} = req.body
    const user = await UsersDao.findUser(email)
    if(!user.userExists){
        return res.json({error:"No user found"})
    }
    const match = await comparePass(password,user.user.password)
    if(match){
        return res.status(200).json({login:true,user})
        
    }else{
        return res.json({error:"Incorrect pass"})
    }
})

app.use("*",(req,res)=>{
    res.status(404).send("Wrong address")
})

export default app