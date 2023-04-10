const initialState={
    dogs:[],
    detatil: [],
    temperament: [],
    allDogs: [],

}

function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_DOGS":
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload,
            }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperament: action.payload,
            }

        case "GET_NAME_DOGS":
            return{
                ...state,
                dogs: action.payload
            }
        case "FILTER_BY_TEMPERAMENTS":
            const allDogs= state.allDogs;
            const filter= action.payload === "All" ? allDogs : allDogs.filter(element => element.temperament?.includes(action.payload))
            return{
                ...state,
                dogs: filter
            }
        case "POST_DOGS":
            return{
                ...state
            }
        case "ORDER_BY_NAME":
            let orderName= action.payload === "asc" ? state.dogs.sort(function(a,b){
                if(a.name> b.name){
                    return 1;
                }
                if (b.name> a.name){
                    return -1;
                }
                return 0;
            }):
            state.dogs.sort(function(a,b){
                if(a.name>b.name){
                    return -1;
                }
                if(b.name>a.name){
                    return 1;
                }
             return 0;
             })
             return{
                ...state,
                dogs: orderName,
             }
        case "ORDER_BY_WEIGHT":
            let orderWeight= action.payload ==="asc" ? state.dogs.sort(function(a,b){
                if(parseInt(a.weight_min)>parseInt(b.weight_min)){ 
                    return 1;
                }
                if(parseInt(b.weight_min)>parseInt(a.weight_min)){ 
                    return -1;
                }
                return 0;
            }):
            state.dogs.sort(function(a,b){
                if(parseInt(a.weight_min)>parseInt(b.weight_min)){ 
                    return -1;
                }
                if(parseInt(b.weight_min)>parseInt(a.weight_min)){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                dogs: orderWeight
            }
        case "FILTER_BY_ORIGIN":
            const dogsAll= state.allDogs;
            const filterOrigin= action.payload === "created"? dogsAll.filter(element => element.createdInDb): dogsAll.filter(element=> !element.createdInDb)
            return{
                ...state,
                dogs: action.payload==="all"? state.allDogs : filterOrigin
            }
        case "DETAIL_DOG":
            return{
                ...state,
                detail: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer;