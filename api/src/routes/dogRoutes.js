const {Router} = require("express");
const {getAll} = require("../Controllers/Controllers.js");
const {Dog, Temperament} = require("../db.js");

const router = Router();

router.get("/", async(req, res)=>{
    const {name}= req.query;
    try{
        const allDogs = await getAll();

        if(name){
            const dogsFilter= await allDogs.filter(element => element.name.toLowerCase().includes(name.toLowerCase()))
            dogsFilter.length?
            res.status(200).send(dogsFilter):
            res.status(404).send("No existe esta raza")
        }else{
            res.status(200).send(allDogs)
        }
    }catch(error){
        res.status(404).send(error.message)
    }
})
router.get("/:id", async (req, res)=> {
    const {id}=req.params;
    try{
        const allDogs= await getAll();

        if(id){
            let idFilter= await allDogs.filter(element=> element.id == id);
            idFilter.length?
            res.status(200).json(idFilter):
            res.status(404).send("no se encontro la raza con el id ingresado")
        }
    }catch(error){
        res.status(404).send(error.message)
    }
})
module.exports = router;