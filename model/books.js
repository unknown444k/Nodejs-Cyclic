const mongoose = require("mongoose");
require("dotenv").config()

async function connectDB(){

    try {
        await mongoose.connect(process.env.MONGOURI,{
            
                useNewUrlParser: true,
                useUnifiedTopology: true,
              }
        )
        console.log("Db connected successfully")
    } catch (error) {
        console.log("Connection error")
    }
}
connectDB()

const bookSchema = mongoose.Schema({
    title:{
      type:String,
      unique:true,
      required:true
    },
    authorname:{
        type:String,
        unique:true,
        required:true
      }
})

dbs = mongoose.model("booksdetails",bookSchema)
module.exports = dbs