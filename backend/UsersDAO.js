let Users;

class UsersDao {
    static async injectDB(conn){
        if(Users){
            return
        }
        try {
            Users = await conn.db("Ecommerce").collection("users")
        } catch (error) {
            console.error(error)
            return `Unable to to connect to DB ${error}`
        }
    }

    static async RegisterUsers(name,email,password){

        try {
            const findUser = await Users.findOne({email})
            // console.log(findUser)
            if(!findUser){
                const addUser = await Users.insertOne({name,email,password})
                return {message:"User added"}
            }else{
                return {
                    error : "user already exists, go to login"
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    static async findUser(email){

        try {
            let exists = await Users.findOne({email})
            if(exists){
                return {
                    userExists:true,
                    user:exists
                }
            }else{
                return{
                    userExists:false
                }
            }
            
        } catch (err) {
            console.log(err)
        }
    }
}

export {Users,UsersDao}