const {check} = require ('express-validator')

const checks = [
    check('nombre')
        .notEmpty().withMessage('El campo nombre es requerido')
        .isString().withMessage('El campo nombre debe ser un string'),
    check('telefono')
        .notEmpty().withMessage('El campo teléfono es requerido')
        .isNumeric().withMessage('El campo teléfono debe ser un number'),
    check('dirección')
        .notEmpty().withMessage('El campo dirección es requerido')
        .isString().withMessage('El campo dirección debe ser un string'),
    check('horario')
        .notEmpty().withMessage('El campo horario es requerido')
        .isString().withMessage('El campo horario debe ser un string')
]

module.exports = checks
