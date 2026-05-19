// Servidor estático para la landing de Finca Sa Duaia.
// Railway corre este proceso; sirve los archivos ya compilados.
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname, { extensions: ["html"] }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Finca Sa Duaia escuchando en el puerto ${port}`);
});
