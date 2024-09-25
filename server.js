const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//chamando as variáveis de ambiente
require("dotenv").config();

/*middleware:
quando chamar localhost:3080/api
ele abre o /rotas/index.js*/
const api = require("./rotas/");
app.use("/api", api);
const port = 3080;

//rota raiz
app.get("/", (req, res) => {
    res.json({
        sucess: true,
    });
});

app.listen(port);