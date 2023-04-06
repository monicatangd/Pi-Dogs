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

export function filterTemperaments(payload){
    return{
        type: "FILTER_BY_TEMPERAMENTS",
        payload
    }
}

export function orderByName(name){
    return{
        type: "ORDER_BY_NAME",
        name
    }
}

