const express = require ('express')
const router = express.Router()
const userController = require ('../controllers/userController')
const auth = require ('../middleware/auth')
const checksLogin = require ('../middleware/checksLogin')
const {validarChecks} = require('../middleware/validarChecks')
const validarToken = require ('../middleware/validarToken')
// const checks = require('../middleware/checks')

router.get('/session',userController.prueba)
router.get('/consulta',auth,userController.consulta)
router.get('/borrar',userController.borrarSession)
router.get('/hash',userController.hash)

router.post('/login', checksLogin, validarChecks, userController.login)
router.delete('./logout',userController.logout)

//jwt
router.post('/testtoken',userController.testJWT)
router.get('/paso',validarToken,userController.pasoElToken)
//router.post('/logintoken',checksLogin, validarChecks,userController.loginConToken)

module.exports = router