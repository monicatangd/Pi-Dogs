const axios = require("axios");
const {Dog, Temperament} = require("../db.js");
const {API_KEY} = process.env;

const getDogsApi = async()=>{
    try{
    const getDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

    const infoDogs= await getDogs.data.map(element=>{
        return{
            id: element.id,
            image: element.image.url,
            name: element.name,
            height: element.height.metric,
            weight_min: element.weight.metric.split(" - ")[0],
            weight_max: element.weight.metric.split(" - ")[1],
            life_span: element.life_span,
            temperament: element.temperament,
        }
    });

    return infoDogs;
}catch(error){
    throw new Error(error.message)
}
}

const getDogsDb = async () => {
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ["name"],
            through:{
                attributes: [],
            }
        }
    });
}

const getAll = async()=>{
    const dogsApi = await getDogsApi();
    const dogsDb = await getDogsDb();
    const getAllDogs = dogsApi.concat(dogsDb);
    return getAllDogs;
}

module.exports={
    getDogsApi,
    getDogsDb,
    getAll,
}