# **Examen de Fin de Carrera - 2025B - Backend**
## **Autor:** Ardanny Romero

Proyecto de backend enfocado en la gestión de servicios, estructurado con un sistema de rutas, controladores y modelos para administrar usuarios, clientes, técnicos y tickets. Todas las rutas base de la API inician con el prefijo `/api`.

---
## Esquema de Base de Datos
<img width="726" height="348" alt="image" src="https://github.com/user-attachments/assets/ddc52aca-1512-495c-97f4-86d5bfbc3bfa" />

---
# **Modelos y sus endpoints**

## 1. Usuario
Este modelo maneja el acceso y la autenticación del sistema.
**Campos del esquema:** `nombre`, `apellido`, `email` (único), `password` (encriptado con bcrypt).

**Endpoints (Rutas Públicas):**
* `POST /api/registro`: Permite registrar un nuevo usuario en la base de datos.
* `POST /api/login`: Autentica al usuario verificando su email y contraseña, devolviendo un token JWT necesario para acceder a las rutas protegidas.

## 2. Cliente
Almacena la información de las entidades o personas que solicitan soporte.
**Campos del esquema:** `cedula` (único), `nombre`, `apellido`, `ciudad`, `email`, `direccion`, `telefono`, `fecha_nacimiento`, `dependencia`.

**Endpoints (Privados - Requieren Token JWT):**
* `POST /api/clientes`: Crea un nuevo registro de cliente validando que la cédula ingresada no exista previamente.
* `GET /api/clientes`: Devuelve un arreglo con todos los clientes registrados, ordenados desde el más reciente.
* `GET /api/cliente/:id`: Devuelve un JSON del cliente al cual corresponda la ID en MongoDB.
* `PUT /api/cliente/:id`: Actualiza los datos de un cliente específico según su ID de MongoDB.
* `DELETE /api/cliente/:id`: Elimina a un cliente de la base de datos.

## 3. Técnico
Gestiona el personal encargado de atender y resolver los tickets.
**Campos del esquema:** `nombre`, `apellido`, `cedula` (único), `fecha_nacimiento`, `genero`, `ciudad`, `direccion`, `telefono`, `email`.

**Endpoints (Privados - Requieren Token JWT):**
* `POST /api/tecnicos`: Registra la información de un nuevo técnico.
* `GET /api/tecnicos`: Obtiene la lista completa de técnicos registrados en el sistema.
* `GET /api/tecnico/:id`: Devuelve un JSON del tecnico al cual corresponda la ID en MongoDB.
* `PUT /api/tecnico/:id`: Modifica la información de un técnico.
* `DELETE /api/tecnico/:id`: Borra el registro de un técnico mediante su ID.

## 4. Ticket
Módulo transaccional principal que asocia las tareas requeridas con un técnico responsable y un cliente.
**Campos del esquema:** `codigo` (único), `descripcion`, `tecnico` (Referencia al ObjectId de la colección Técnico), `cliente` (Referencia al ObjectId de la colección Cliente).

**Endpoints (Privados - Requieren Token JWT):**
* `POST /api/tickets`: Crea un nuevo ticket verificando obligatoriamente que tanto el ID del cliente como el del técnico existan en la base de datos.
* `GET /api/tickets`: Lista los tickets de servicio e incluye detalles anidados utilizando el método `populate` de Mongoose, trayendo datos clave del cliente (nombre, apellido, cédula, dependencia) y del técnico asignado (nombre, apellido, teléfono).
* `GET /api/ticket/:id`: Devuelve un JSON del ticket al cual corresponda la ID en MongoDB.
* `PUT /api/ticket/:id`: Actualiza la información de un ticket existente.
* `DELETE /api/ticket/:id`: Elimina un ticket del sistema.

---
## Tecnologías y Dependencias Principales
* **Framework Web:** Express v5.2.1
* **Base de Datos:** MongoDB manipulado a través de Mongoose v9.2.2
* **Seguridad y Autenticación:** Protección de rutas mediante JSON Web Tokens (`jsonwebtoken`) y cifrado de contraseñas con `bcryptjs`.
* **Utilidades:** Variables de entorno administradas con `dotenv` y políticas CORS configuradas con el paquete `cors`.

