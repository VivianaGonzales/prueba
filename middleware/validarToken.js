


module.exports = validarToken = (req, res, next) => {
    const token = req.header ('JWToken')
    if (!token) {
        return res.json({
            msg: 'no hay token'
        })
    }
    next()
}