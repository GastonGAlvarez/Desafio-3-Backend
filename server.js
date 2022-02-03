const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const Contenedor = require('./clase.js')
const newClass = new Contenedor('products.json');

const server = app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto ${PORT}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));

app.get('/', (req, res) =>{
    res.send('Bienvenido al servidor de Ash');
})

app.get('/products', (req, res) =>{
    res.send( JSON.stringify(newClass.getAll() ));
    console.log(newClass.getAll())
})

app.get('/randomProduct', (req, res) =>{
    res.send([1,2,3,4,5]);
})

