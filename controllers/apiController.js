const { Farmacia } = require('../models/farmacias')
// const {User} = require('../models/user')

const apiController = {
    async apiGet(req,res){
        const listadoDeFarmacias = await Farmacia.find()
        res.json(listadoDeFarmacias)
    },
    async apiGetOne(req,res){
        const listadoDeFarmacias = await Farmacia.findOne(req.params)
        res.json(listadoDeFarmacias)
    },
    async apiGetList(req,res){
        const listadoDeFarmacias = await Farmacia.find(req.query)
        res.json(listadoDeFarmacias)
    },
    async apiGetId(req,res){
        const listadoDeFarmacias = await Farmacia.findById(req.params.id)
        res.json(listadoDeFarmacias)
    },

// comento este apiPost para poner de nuevo el de farmacia 
//con el que trabajo ahora, asi me muestra errores de los checks
    // async apiPost(req,res){
    //     try {
    //         const nuevoUsuario = new User(req.body)
    //         await nuevoUsuario.save()
    //         res.status(201).json(nuevoUsuario)
    //     } catch (error) {
    //         res.status(400).json(error)
    //     }
    // },
    async apiPost(req,res){
        try {
            const nuevaFarmacia = new Farmacia(req.body)
            await nuevaFarmacia.save()
            res.status(201).json(nuevaFarmacia)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    // async apiGet(req, res){
    //     const listadoDeAlumnos = await Alumno.find()
    //     res.json(listadoDeAlumnos)
    // },

    // async apiPost(req, res){
    //     try {
    //         const nuevoAlumno = new Alumno(req.body)
    //         await nuevoAlumno.save()
    //         res.status(201).json(nuevoAlumno)
    //     } catch (error) {
    //         res.status(400).json(error)
    //     }
    //     // res.status(201).send('Esta ruta un método http POST')
    // },

    // comento apiPut asi hago el nuevo metodo put
    // apiPut(req, res){
    //     res.status(201).send('Esta ruta un método http PUT')
    // },

    async apiPut(req,res){
        await Farmacia.findByIdAndUpdate(req.params.id, req.body)
        const editado = await Farmacia.findById(req.params.id)
        res.status(201).json(editado)
    },
    
    async apiDelete(req, res){
        await Farmacia.findByIdAndDelete(req.params.id)
        res.status(200).send('El id ingresado ha sido borrado')
    }
}


module.exports = apiController