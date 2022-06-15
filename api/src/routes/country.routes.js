const { Router } = require('express');

const {getCountries,getCountriesId, getCountriesName,getconsole} = require('../servises/country.servises')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/', getCountries);
router.get('/:idPais', getCountriesId)
router.get('/nombre/:nombre', getCountriesName)

module.exports = router;