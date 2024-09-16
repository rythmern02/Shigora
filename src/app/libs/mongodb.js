import mongoose from "mongoose";

const ConnectMongodb = async() =>{
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log("connection with the database initialized")
    } catch (error) {
        console.log("Trouble in connection with the databasess", error)   
    }
}

export default ConnectMongodb;