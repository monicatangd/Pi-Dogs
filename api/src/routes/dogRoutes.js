const {Router} = require("express");
const {getAll} = require("../Controllers/Controllers.js");
const {Dog, Temperament} = require("../db.js");

const router = Router();

router.get("/", async(req, res)=>{
    const {name}= req.query;
    try{
        
        const allDogs = await getAll(); //obtengo todas las razas de perros

        if(name){ // si name trae algun elemento se filtra por nombre de raza con allDogs, no importa mayusculas o minusculas
            const dogsFilter= await allDogs.filter(element => element.name.toLowerCase().includes(name.toLowerCase()))
            dogsFilter.length?
            res.status(200).send(dogsFilter):
            res.status(404).send("No existe esta raza")
        }else{
            res.status(200).send(allDogs)// si no hay name se envia todas las raza obtenidas
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
});

router.post("/", async (req, res)=>{
    const { image, name, height, weight, life_span, createdInDb, temperament} = req.body;
    try{
        const newDog= await Dog.create({
            image,
            name,
            height,
            weight,
            life_span,
            createdInDb
        });
        const createTemperament= await Temperament.findAll({
            where:{
                name: temperament
            }
        })
        newDog.addTemperament(createTemperament);
        res.status(200).send("Raza de perro creada con exito");
    }catch(error){
        res.status(404).send(error.message);
    }
})


module.exports = router;