const path = require('path')
const Orden = require('../utils/database').models.orden
const Pago = require('../utils/database').models.pago
const Perfil = require('../utils/database').models.perfil

exports.getOrden = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/orden.html'));
}

exports.postAgregarPago = (req,res)=>{
    console.log(req.body)
    Pago.create(req.body)
        .then(o=>{
            console.log("Orden Exitosa")
            res.json({estado: "Aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "Error"})
        })
}

exports.postAgregarPerfil = (req,res)=>{
    console.log(req.body)
    Perfil.create(req.body)
        .then(o=>{
            console.log("Orden Exitosa")
            res.json({estado: "Aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "Error"})
        })
}



exports.postAgregarOrden = (req,res)=>{
    console.log(req.body)
    Orden.create(req.body)
        .then(o=>{
            console.log("Orden Exitosa")
            res.json({estado: "Aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "Error"})
        })
}

exports.getObtenerOrden = (req,res)=>{
    Orden.findAll()
    .then(Orden =>{
        console.log(Orden)
        res.json(Orden)
    })
    .catch(err=>console.log(err))
}

exports.postBorrarOrden = (req,res)=>{
    console.log(req.body)
    Orden.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(()=>{
        console.log("Orden Eliminada")
        res.json({estado:"Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"Error"})
    })
}

exports.postActualizarOrden = (req,res)=>{
    console.log(req.body)
    Orden.update({
        item:req.body.item
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Orden Actualizada")
        res.json({estado: "Aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"Error"})
    })
}
