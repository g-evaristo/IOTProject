const router = require("express").Router();
const Device = require("../model/Devices");

//rota dos dispositivos
router.get("/", async (req, res) => {
    try{
        const listaDevices = await Device.find();
        res.json({
            sucess: true,
            message: listaDevices
        });
    }
    catch{
        res.json({
            sucess: false,
            message: "Não foi possível recuperar os dados!"
        });
    };
});

router.post("/", async (req,res) => {
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    });
    try{
        const saveNovoDevice = await novoDevice.save();
        res.json({
            sucess: true,
            message: saveNovoDevice
        });
    }
    catch{
        res.json({
            sucess: false,
            message: "Não foi possível salvar os dados no banco de dados!"
        });
    };
});

router.put("/:id", async(req,res) => {
    try{
        const updateDeviceId = await Device.updateOne(
            {_id: req.params.id}, 
            {   
                kwh: req.body.kwh,
                corrente: req.body.corrente,
                voltagem: req.body.voltagem,
                fp: req.body.fp
            }
        );
        res.json({
            sucess: true,
            updated: updateDeviceId.nModified
        });
    }
    catch(err){
        res.json({
            sucess: false,
            message: "Não foi possível atualizar os dados! "+err
        });
    };
});

router.delete("/:id", async (req,res) => {
    try{
        const deleteDeviceId = await Device.deleteOne({
            _id: req.params.id
        });
        res.json({
            sucess: true,
            data: deleteDeviceId
        });
    }
    catch(err){
        res.json({
            sucess: false,
            message: "Não foi possível excluir os dados! "+err
        });
    };
});

module.exports = router;