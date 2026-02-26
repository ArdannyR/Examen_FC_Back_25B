import Tecnico from '../models/Tecnico.js'
import mongoose from 'mongoose'

const registrarTecnico = async (req, res) => {
    try {
        const { nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email } = req.body
        
        if (Object.values({nombre, apellido, cedula, fecha_nacimiento, genero, ciudad, direccion, telefono, email}).includes("")) 
            return res.status(400).json({msg: "Lo sentimos, debes llenar todos los campos"})
        
        const verificarCedula = await Tecnico.findOne({cedula})
        if(verificarCedula) 
            return res.status(400).json({msg: "La cédula del técnico ya existe"})

        const nuevoTecnico = new Tecnico(req.body)
        await nuevoTecnico.save()
        
        res.status(200).json({msg: "Técnico registrado exitosamente"})
    } catch (error) {
        res.status(500).json({msg: "Error en el servidor", error: error.message})
    }
}

const listarTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.find().sort({createdAt: -1})
        res.status(200).json(tecnicos)
    } catch (error) {
        res.status(500).json({msg: "Error al listar técnicos", error: error.message})
    }
}

const actualizarTecnico = async (req, res) => {
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg: "ID no válido"})

    if(req.body.cedula){
        const verificarCedula = await Tecnico.findOne({cedula: req.body.cedula})
        if(verificarCedula && verificarCedula._id.toString() !== id)
            return res.status(400).json({msg: "La cédula ya pertenece a otro técnico"})
    }

    await Tecnico.findByIdAndUpdate(id, req.body)
    res.status(200).json({msg: "Técnico actualizado exitosamente"})
}

const eliminarTecnico = async (req, res) => {
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg: "ID no válido"})

    await Tecnico.findByIdAndDelete(id)
    res.status(200).json({msg: "Técnico eliminado exitosamente"})
}

export {
    registrarTecnico,
    listarTecnicos,
    actualizarTecnico,
    eliminarTecnico
}