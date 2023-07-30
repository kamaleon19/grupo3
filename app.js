const { log } = require('console');
const express = require('express');

const path= require('path')

const app= express();

const publicPath= path.resolve(__dirname, './public')



app.use(express.static("public"))


app.listen(3000, ()=>{
     console.log('Servidor corriendo');
}) 
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname,"/views/home.html"))
 });
app.get("/DetalleProducto",function (req,res){
     res.sendFile(path.join(__dirname,"/views/DetalleProducto.html"))
 })