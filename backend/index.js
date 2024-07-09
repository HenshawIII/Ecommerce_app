import app from './server.js'
import dotenv from 'dotenv'
import { MongoClient ,ServerApiVersion} from 'mongodb'
import { UsersDao } from './UsersDAO.js'



dotenv.config()

MongoClient.connect(process.env.URI,{
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
})
.then(async client=>{
    await UsersDao.injectDB(client)
    app.listen(9224,()=>{
        console.log("app running")
    })
})
.catch(e=>{
    console.log(e)
    process.exit(1)
})
