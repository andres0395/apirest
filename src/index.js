// const express = require('express'); tambien se puede hacer con codigo moderno import y export
import express from 'express';
import cors from 'cors';
import router from './routes/employees.routes.js';
import routes from './routes/index.routes.js';
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json({
    type:"*/*"
}));// eso es para procesar lo que se esta enviando
app.use(cors());



app.use(router);
app.use(routes);
app.listen(3000);

// app.post('/', (req, res)=>res.send('creando info'));
// app.put('/', (req, res)=>res.send('actualizando info'));
// app.delete('/', (req, res)=>res.send('eliminando info'));
console.log('server in port 3000');
console.log('object');
// para el funcionamiento de node primero npm init -y para iniciar, instalar nodemon de manera global para ver los cambios, para utilizar codigo moderno puede hacelo si en el package.json pone type:module install de mysql2 en el proyecto, instalar express, en package.json en scripts agregar esto "dev": "nodemon src/index.js" para que funcione con npm run dev, instalar cors para la comunicacion del front con el back mpn i cors  