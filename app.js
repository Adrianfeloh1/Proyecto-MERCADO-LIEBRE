const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto http://localhost:3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});


/* CONFIGURACION DE LOS FORMULARIOS PARA QUE LOS BOTONES HAGAN LA RUTA MARCADA */
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.post("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

