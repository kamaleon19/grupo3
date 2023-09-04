const express=require ("express")
const router = express.Router()
const productosController=require("../controllers/productosControllers")

router.get("/DetalleProductos",productosController.detalleDeProducto)

module.exports=router