const { log } = require('console');
const express = require('express');

const path= require('path')

const app= express();

const publicPath= path.resolve(__dirname, './public')

const mainRoute= require('./routes/main')



app.use(express.static("public"))


app.listen(3000, ()=>{
     console.log('Servidor corriendo');
}) 


app.get('/', mainRoute);


app.get("/DetalleProducto",function (req,res){
     res.sendFile(path.join(__dirname,"/views/DetalleProducto.html"))
 })

 app.get("/login",function (req,res){
     res.sendFile(path.join(__dirname,"/views/login.html"))
 })

 app.get("/footer",function (req,res){
    res.sendFile(path.join(__dirname,"/views/footer.html"))
})