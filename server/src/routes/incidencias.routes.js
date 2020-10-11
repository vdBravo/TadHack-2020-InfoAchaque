const{ Router} = require('express')
const router =Router();

const incidecianCtrl = require('../controllers/incidencias.controllers.js')

router.get('/', incidecianCtrl.getIncidencias);

router.post('/', incidecianCtrl.createIncidencia);

router.get('/:id', incidecianCtrl.getIncidencia);

router.put('/:id', incidecianCtrl.editIncidencia);

router.delete('/:id', incidecianCtrl.deleteIncidencia);

router.get('/', incidecianCtrl.municipioIncidencia); 

module.exports = router 