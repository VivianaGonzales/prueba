const {check} = require ('express-validator')

const checksLogin = [
    check('email')
        .notEmpty().withMessage('El campo email es requerido')
        .isString().withMessage('El campo email debe ser un string')
        .isEmail().withMessage('El campo email debe contar con el formato de email: @gmail, @hotmail, etc'),
    check('password')
        .notEmpty().withMessage('El campo password es requerido')
        .isNumeric().withMessage('El campo password debe ser un número')
]

module.exports = checksLogin