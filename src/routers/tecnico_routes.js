import {Router} from 'express'
import { 
    registrarTecnico, 
    listarTecnicos, 
    actualizarTecnico, 
    detalleTecnico,
    eliminarTecnico 
} from '../controllers/tecnico_controller.js'
import verificarAutenticacion from '../middlewares/auth.js'

const router = Router()

// Todas las rutas protegidas con Token
router.post('/tecnicos', verificarAutenticacion, registrarTecnico)
router.get('/tecnicos', verificarAutenticacion, listarTecnicos)
router.get('/tecnico/:id', verificarAutenticacion, detalleTecnico)
router.put('/tecnico/:id', verificarAutenticacion, actualizarTecnico)
router.delete('/tecnico/:id', verificarAutenticacion, eliminarTecnico)

export default router