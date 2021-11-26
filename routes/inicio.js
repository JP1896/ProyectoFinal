// Bibliotecas
const router = require("express").Router();
const shopController = require('../controllers/inicio');
const ordenController = require('../controllers/orden');

router.get('/perfil',shopController.getPerfil)
router.get('/pago',shopController.getPago)
router.get('/gracias',shopController.getGracias)

router.get('/orden',ordenController.getOrden)
router.post('/agregarOrden',ordenController.postAgregarOrden)
router.get('/obtenerOrden',ordenController.getObtenerOrden)
router.post('/borrarOrden',ordenController.postBorrarOrden)
router.post('/actualizarOrden',ordenController.postActualizarOrden)

router.post('/agregarPago',ordenController.postAgregarPago)
router.post('/agregarPerfil',ordenController.postAgregarPerfil)

module.exports = router