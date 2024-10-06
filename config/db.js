import mongoose from "mongoose";
import colors from 'colors';
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log(`Connect to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`Error ${error}`.bgRed.white)
    }
}
export default connectDB