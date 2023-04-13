import axios from "axios";


export function getDogs(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/dogs/");
        return dispatch({
            type:"GET_DOGS",
            payload: json.data,
        });
    }
}

export function getTemperaments(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/temperaments/");
        return dispatch({
            type: "GET_TEMPERAMENTS",
            payload: json.data,
        })
    }
}

export function postDogs(payload){
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/dogs", payload);
        console.log(json);
        return json;
    }
}

export function filterTemperaments(payload){
    return{
        type: "FILTER_BY_TEMPERAMENTS",
        payload
    }
}

export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByWeight(payload){
    return{
        type: "ORDER_BY_WEIGHT",
        payload
    }
}

export function filterByOrigin(payload){
    return{
        type: "FILTER_BY_ORIGIN",
        payload
    }
}

export function getNameDogs(name){
    return async function(dispatch){
        try{
            var json=await axios.get("http://localhost:3001/dogs?name="+name);
            return dispatch({
                type: "GET_NAME_DOGS",
                payload: json.data,
            })
        }catch(error){
            console.log(error);
        }
    }

}

export function detailDog(id){
    return async function(dispatch){
        var json= await axios.get("http://localhost:3001/dogs/"+id);
        return dispatch({
            type: "DETAIL_DOG",
            payload: json.data,
        })
    }
    

}
export function deleteDog(id){
    return async function(dispatch){
         await axios.delete("http://localhost:3001/dogs/"+id);
        return dispatch({
            type: "DELETE_DOG"
        })
    }
}

export function updateDog(payload, id){
    
    return async function(dispatch){
        try{
       await axios.put("http://localhost:3001/dogs/"+id, payload);
        return dispatch({
            type: "UPDATE_DOG",
            payload
        })
    }catch(error){
    console.log(error)
    }
}
}
