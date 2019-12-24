// Importación de variables de entorno.
require("dotenv").config();

// Importación de dependencias.
const express = require("express");

// Ejecución de express.
const app = express();

// Manejo de rutas.
app.get("/", (request, response, next) => {
    response.send({ hello: "Hello world"});
});

// Variables.
const port = (process.env.PORT || 3000);
const ipv4 = (process.env.IPV4 || "192.168.0.1");

// Inicialización con un puerto.
const server = app.listen(port, () => {
    console.log("[Server] All Right: http://localhost:" + server.address().port);
    console.log("[Server] Optional: http://" +ipv4+ ":" + server.address().port);
}); 