const router = require("express").Router();
const devices = require("./devices");
router.use("/devices",devices);
require('../mongoDB/mongocon');

//rota raiz
router.get("/", (req,res) => {
    res.json({
        sucess: false,
        message: "Acesso reservado!"
    });
});

module.exports = router;