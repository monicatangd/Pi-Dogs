const {Router} = require("express");
const axios = require("axios");
const {getAll} = require("../Controllers/Controllers.js");
const {Dog, Temperament} = require("../db.js");
const {API_KEY} = process.env;

const router = Router();

router.get("/", async (req, res)=>{
    try{
    const arr=[];
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temperament = temperamentApi.data.map(el=> el.temperament)
    const temp= temperament.map(el=> el)// temp guarda un arreglo con todos los strings de temperament
    temp.forEach(element => {

        if(element){
             const array= element.split(", ")// array guarda como item de un arreglo cada temperamento de un string 
             array.forEach(el=>{ //forEach recorre cada item de cada arreglo
                arr.push(el)   // cada item de los arreglos se mete en la variable arr
            })
        }
    });
   
    //const filterArr= arr.filter((item, index)=>{ //se filtra la variable arr para que no hayan items repetidos
      //return arr.indexOf(item) === index;
   // });
    
    
    arr.forEach(element=>{ //se agrega cada item como nombre en la base de datos
        Temperament.findOrCreate({
            where:{ name: element}
        })
    });
    const allTemperaments = await Temperament.findAll(); //se obtiene todos los temperamentos de la base de datos
    res.send(allTemperaments);
}catch(error){
    req.status(404).send(error.message);
}
})

module.exports = router;