import React,{createContext,useState} from 'react'

const userContext = createContext()
function UserProvide({children}) {
    const [user,setUser] = useState(()=>{
        return   JSON.parse(sessionStorage.getItem("Site-user")) ? JSON.parse(sessionStorage.getItem("Site-user")):null
    })


  return (
    <userContext.Provider value={{user,setUser}}>
       {children}
    </userContext.Provider>
  )
}

export { userContext,UserProvide}