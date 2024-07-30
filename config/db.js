import mongoose, { connect } from "mongoose"

export  const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://jmuhumuza:TGCo77FBsgjVjn2G@cluster0.ngebntt.mongodb.net/').then(()=>console.log('DB is connected'))
}



// mongodb://localhost/Edu