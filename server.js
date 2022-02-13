const express = require("express");

const app = express()
const chats= require("./Data/datas")
const port = process.env.PORT || 8000;
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>this is home page</h1>")
})
app.get('/chat/api',(req,res)=>{
   res.send(chats)
   console.log(chats)
    // console.log(req)
})
app.get("/chat/api/:id",(req,res)=>{
    const id = req.params.id
    const singlechats = chats.find((c)=>{
        return c._id=== id
    })
    res.send(singlechats)
})
app.listen(port,()=>{
   console.log(`listen  form Port no ${port} `)
})