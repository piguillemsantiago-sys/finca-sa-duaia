// Servidor estático para la landing de Finca Sa Duaia.
// Railway corre este proceso; sirve los archivos ya compilados.
// Solo se publica lo que forma parte del sitio: fuentes, notas y config
// del repo (src/, memory.md, package.json…) no quedan accesibles.
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

for (const dir of ["assets", "css", "js"]) {
  app.use(`/${dir}`, express.static(path.join(__dirname, dir)));
}

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get(["/Legal", "/Legal.html"], (req, res) => {
  res.sendFile(path.join(__dirname, "Legal.html"));
});

app.listen(port, () => {
  console.log(`Finca Sa Duaia escuchando en el puerto ${port}`);
});
