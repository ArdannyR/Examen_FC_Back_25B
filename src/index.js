// Importaciones y configuraciones
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './database.js';
// Rutas de modelos
import usuarioRoute from './routers/usuario_route.js'

// Inicializaciones
const app = express();
dotenv.config();
connection(); 

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(cors()); 
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => res.send("Servidor de Gestion de Tickets en linea"))
// Rutas de modelos
app.use('/api/usuarios', usuarioRoute)

// Iniciar el servidor (Nota: El tab me ayuda con los comentarios :p )
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});