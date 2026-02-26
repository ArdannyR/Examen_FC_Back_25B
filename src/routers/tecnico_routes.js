import {Router} from 'express'
import { 
    registrarTecnico, 
    listarTecnicos, 
    actualizarTecnico, 
    eliminarTecnico 
} from '../controllers/tecnico_controller.js'
import verificarAutenticacion from '../middlewares/auth.js'

const router = Router()

// Todas las rutas protegidas con Token
router.post('/tecnicos', verificarAutenticacion, registrarTecnico)
router.get('/tecnicos', verificarAutenticacion, listarTecnicos)
router.put('/tecnico/:id', verificarAutenticacion, actualizarTecnico)
router.delete('/tecnico/:id', verificarAutenticacion, eliminarTecnico)

export default router