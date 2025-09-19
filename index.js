const express = require(`express`);
const app = express();
app.get(`/`, (req, res) => res.send(`Hola mundo desde el servidor`));
app.listen(3258);