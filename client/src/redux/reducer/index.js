const initialState={
    dogs:[],
    detatil: [],
    temperament: [],
    allDogs: [],
    dogsOrder:[],
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
            
            const filterDb= allDogs.filter(element => element.temperaments?.map(el=>el.name).includes(action.payload) )
            const filters= filter.concat(filterDb)
            
            return{
                ...state,
                dogs: filters
            }
        case "POST_DOGS":
            return{
                ...state
            }
        case "ORDER_BY_NAME":
            let orderName= action.payload === "asc" ? state.allDogs.sort(function(a,b){
                if(a.name.toLowerCase()> b.name.toLowerCase()){
                    return 1;
                }
                if (b.name.toLowerCase()> a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            }):
            state.allDogs.sort(function(a,b){
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1;
                }
             return 0;
             })
             return{
                ...state,
                dogs: orderName,
             }
        case "ORDER_BY_WEIGHT":
            
            const orderWeight= action.payload ==="asc" ? state.allDogs.sort(function(a,b){
                
                return (parseInt(a.weight_min) - parseInt(b.weight_min));
            
            }):
            state.allDogs.sort(function(a,b){
                return (parseInt(b.weight_min) - parseInt(a.weight_min));
            })
            console.log(orderWeight)
            return{
                ...state,
                dogs: orderWeight,
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
        case "DELETE_DOG":
            return{
                ...state,
            }
        case "UPDATE_DOG":
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default rootReducer;