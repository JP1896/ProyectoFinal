// Bibliotecas
const router = require("express").Router();
const ordenController = require('../controllers/orden');

router.post('/orden',ordenController.postOrden)
router.post('/agregarOrden',ordenController.postAgregarOrden)
router.get('/obtenerOrden',ordenController.getObtenerOrden)
router.get('/borrarOrdenAll',ordenController.getBorrarOrdenAll)
router.post('/borrarOrden',ordenController.postBorrarOrden)
router.post('/actualizarOrden',ordenController.postActualizarOrden)

router.get('/obtenerArticulos',ordenController.getObtenerArticulos)

router.post('/agregarPago',ordenController.postAgregarPago)
router.post('/agregarPerfil',ordenController.postAgregarPerfil)

module.exports = router