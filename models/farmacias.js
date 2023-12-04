const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    empleados:{
        type: Number,
    },
    dirección:{
        type: String,
        required: true
    },
    horario:{
        type: String,
        required: true,
        enum: ['cortado', 'corrido']
    },
    tarjeta:{
        type: Boolean
    }

})

const Farmacia = model('Farmacia', schema)

module.exports = {Farmacia}