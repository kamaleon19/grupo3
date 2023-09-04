const express = require('express');

const path= require('path')
const app= express();
const publicPath= path.resolve(__dirname, '../public') 
const mainRoute= require('./routes/main')
const usersRoute=require("./routes/users")
const productosRoute= require("./routes/productos")

app.use(express.static(publicPath))

app.use(express.static("public"))
app.set("view engine","ejs") 


 
app.listen(3000, ()=>{
     console.log('Servidor corriendo');
}) 


app.get('/', mainRoute);

app.get("/productos",productosRoute)

app.get("/users",usersRoute)

