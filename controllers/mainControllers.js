const path = require('path')
let mainController = {
    home : (req, res) => {
        res.sendFile(path.join(__dirname,"../views/home.html"))
    }
}

module.exports= mainController