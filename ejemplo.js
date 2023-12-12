import axios from "axios"

const listado = async () => {
    const { data } = await axios.get('https://prueba-production-730b.up.railway.app/api/info')
    return data
}

const nuevaFarmacia = async (nombre, telefono, empleados, direccion, horario, tarjeta) => {
    const { data } = await axios.post('https://prueba-production-730b.up.railway.app/api/crear', {
        nombre,
        telefono,
        empleados,
        direccion,
        horario,
        tarjeta
    })
    return data
}

const editarFarmacia = async (nombre, telefono, empleados, direccion, horario, tarjeta, id) => {
    const { data } = await axios.put('https://prueba-production-730b.up.railway.app/api/editar/' + id, {
        nombre,
        telefono,
        empleados,
        direccion,
        horario,
        tarjeta
    })
    return data
}

const borrarFarmacia = async (id) => {
    const { data } = await axios.delete('https://prueba-production-730b.up.railway.app/api/borrar/' + id)
    return data
}

const listadoConToken = async (token) => {
    const { data } = await axios.get('https://prueba-production-730b.up.railway.app/api/info', {
        headers: {
            JWToken: token
        }
    })
    return data
}

const nuevaFarmaciaConToken = async (nombre, telefono, empleados, direccion, horario, tarjeta, token) => {
    const { data } = await axios.post('https://prueba-production-730b.up.railway.app/api/crear', {
        nombre,
        telefono,
        empleados,
        direccion,
        horario,
        tarjeta
    },{
        headers: {
            JWToken: token
        }
    })
    return data
}

const editarFarmaciaConToken = async (nombre, telefono, empleados, direccion, horario, tarjeta, id,token) => {
    const { data } = await axios.put('https://prueba-production-730b.up.railway.app/api/editar/' + id, {
        nombre,
        telefono,
        empleados,
        direccion,
        horario,
        tarjeta
    },{
        headers: {
            JWToken: token
        }
    })
    return data
}

const borrarFarmaciaConToken = async (id,token) => {
    const { data } = await axios.delete('https://prueba-production-730b.up.railway.app/api/borrar/' + id, {
        headers: {
            JWToken: token
        }
    })
    return data
}

const tokenLogin = async (email,password) =>{
    const {data} = await axios.post('https://prueba-production-730b.up.railway.app/user/logintoken',{
        email,
        password
    })
    return data
}