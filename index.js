const express=require("express")     //reqi=uire module expxress  
const app=express()
require('dotenv').config()
const port=9000

app.get('/',(req,res)=>
{
    res.send("ehllo g")
})

app.get('/youtubekabaap',(req,res)=>
{
    res.send("<h2>poori namak</h2>")
})

// app.listen(port, () =>
// {
//     console.log(`Example app listening on port ${port}`)

// })

app.listen(process.env.PORT, ()=>
{
    console.log(`Example app listening on port ${process.env.PORT}`)
})