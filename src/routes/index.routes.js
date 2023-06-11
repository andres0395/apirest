import { Router } from "express";
import { conn } from '../db.js';
const routes = Router();

routes.get('/pong', async(req, res)=>{
    const [result] = await conn.query('SELECT * FROM empleados');
    // res.json(result);
    res.send(result);
});
routes.post('/pong', async(req, res)=>{
    console.log('funcionandooooo');
});
export default routes;