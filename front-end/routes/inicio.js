// Bibliotecas
const router = require("express").Router();
const shopController = require('../controllers/inicio');

router.get('/perfil',shopController.getPerfil)
router.get('/pago',shopController.getPago)
router.get('/gracias',shopController.getGracias)
router.get('/orden',shopController.getOrden)

module.exports = router