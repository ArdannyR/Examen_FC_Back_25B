import mongoose, {Schema, model} from 'mongoose'

const clienteSchema = new Schema({
    cedula: { 
        type: String, 
        required: true, 
        trim: true, 
        unique: true 
    },
    nombre: { 
        type: String, 
        required: true, 
        trim: true 
    },
    apellido: { 
        type: String, 
        required: true, 
        trim: true 
    },
    ciudad: { 
        type: String, 
        required: true, 
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        trim: true 
    },
    direccion: { 
        type: String, 
        required: true, 
        trim: true 
    },
    telefono: { 
        type: String, 
        required: true, 
        trim: true 
    },
    fecha_nacimiento: { 
        type: String, 
        required: true, 
        trim: true 
    },
    dependencia: { 
        type: String, 
        required: true, 
        trim: true 
    }
},{
    timestamps: true
})

export default model('Cliente', clienteSchema)