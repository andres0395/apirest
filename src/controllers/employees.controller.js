import { conn } from "../db.js";

export const getEmployees = (req, res)=>res.send('obteniendo info');
export const postEmployees = async(req, res)=>{
    // para manejar los errores es mejor utilizar el try catch para que el servidor no caiga
    try {
        // req.body es para ver los datos que me envia el cliente
        const {name, dni, edad} = req.body;
        const respuesta = await conn.query('INSERT INTO empleados (nombre, cedula, edad) VALUES (?, ?, ?)',[name,dni,edad]);
        res.send(respuesta);
        
    } catch (error) {
        return res.status(500).json({message: 'error de servidor'});
    }
};
export const putEmployees = (req, res)=>res.send('actualizando info');
export const delEmployees = async(req, res)=>{
    const result =  await conn.query('DELETE FROM empleados WHERE id = ?',[req.params.id]);  
    console.log(result);  
    res.send('eliminando info')
};