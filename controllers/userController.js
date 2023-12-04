const bcrypt = require('bcryptjs')
const {User} = require('../models/user')
const generadorJWT = require('../utils/generador')

const userController = {
    testJWT (req,res) {
        const token = generadorJWT (req.body)
        res.json(token)
    },

    pasoElToken (req, res){
        res.json('pasó el token')
    },
    
    prueba (req, res) {
        const user = {
            id: "123456789",
            name: "Viviana Gonzales",
            age: 23
        }
        req.session.user = user
        res.cookie('cookieDelUsuario',user.name,{maxAge:60000})
        res.json(req.session)
    },
    consulta (req,res){
        console.log("llegué al callback")
        res.json({session: req.session,cookie: req.cookies.cookieDelUsuario})
    },
    borrarSession (req,res) {
        req.session.destroy()
        res.clearCookie('cookieDelUsario')
        res.json({
            msg: "session borrada"
        })
    },
    hash (req, res){
        const salt = bcrypt.genSaltSync(15)
        const pass ="123456789"
        const hash = bcrypt.hashSync(pass,salt)
        const comparacion1 = bcrypt.compareSync(pass,hash)
        const comparacion2 = bcrypt.compareSync("123456",hash)
        res.json({pass,hash,comparacion1,comparacion2})
    },
    async register(req, res){
        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(req.body.password,salt)
        const nuevoUsuarioEnLadb = new Usuario ({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        await nuevoUsuarioEnLadb.save()
        res.status(201).json(nuevoUsuarioEnLadb)
    },
    async login(req, res){
        // async loginConToken(req, res){
        try {
            const persona = await User.findOne({email: req.body.email}) 
            if (persona == null) {
                return res.json({
                    msg: "la contraseña o el email son inválidos"
                })
            }
            if(!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "la contraseña o el email son inválidos"
                })
            }
            // const token = generadorJWT({id: persona._id,name: persona.name}) 
            //     res.json({
            //         msg: "se creó el token",
            //         token
            //     })
            const user = {
                _id: persona._id,    
                name: persona.name
            }

            req.session.user = user
            if(req.body.remember){
                res.cookie('cookieDelUsuario',req.session.user, {maxAge:60000*60})
            }
            res.json({
                msg: "session creada"
            })
        } catch (error) {
            res.json(error)
        }
    },
    logout(req,res){
        req.session.destroy()
        res.clearCookie('cookieDelUsario')
        res.json({
            msg: "session borrada"
        })
    }
}


module.exports = userController