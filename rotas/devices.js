const router = require("express").Router();

//rota dos dispositivos
router.get("/", (req, res) => {
    const devices = [
        {   
            id: 123,
            nome: "Geladeira",
            kwh: 23,
            corrente: 2.1,
            voltagem: 127,
            fp: 1
        },
        {   
            id: 124,
            nome: "Máquina de Lavar",
            kwh: 34,
            corrente: 3.2,
            voltagem: 227,
            fp: 1
        }
    ];
    res.json({
        sucess: true,
        devices: devices
    });
});

router.post("/", (req,res) => {
    res.json(req.body);
    console.log(req.body);
});

module.exports = router;