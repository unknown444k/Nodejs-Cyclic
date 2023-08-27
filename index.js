require("dotenv").config()
const express = require("express")
const app = express()
const database = require("../Nodejs-Cyclic/model/books")
app.use(express.json())

const PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send({title:"books"})
})


app.post("/books",async (req,res)=>{

    const {title,authorname} = req.body;
    try {
        if(!title || !authorname){
            res.status(200).json({error:"title and authorname should not empty"});
        }
        const book = await database.create({
            title,authorname
        })

    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
})


app.get("/books",async(req,res)=>{
try {
    const data = await database.find({})
    if(!data){
        return res.status(404).json({error:"data not found"})
    }
    else{
        return res.status(200).json({books:data})
    }
} catch (error) {
    
}
})
app.listen(PORT,()=>{
    console.log(`the server is listning on ${PORT}`)
})