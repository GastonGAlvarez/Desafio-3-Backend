const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto ${PORT}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));

app.get('/', (req, res) =>{
    res.send('Bienvenido al servidor de Ash');
})