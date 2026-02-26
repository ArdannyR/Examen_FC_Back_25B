import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connection = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URI_LOCAL) // Porsi mande mal el nombre
        console.log(`Base de datos conectada en ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}
export default connection;