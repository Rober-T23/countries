const { Router } = require('express');
const ruta = require('./country.routes.js')
// const api = require('./countriApi.routes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

router.use('/countries',ruta)

module.exports = router;
