const path = require('path')


exports.getPerfil = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/perfil.html'));
}

exports.getPago = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/pago.html'));
}

exports.getGracias = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/gracias.html'));
}