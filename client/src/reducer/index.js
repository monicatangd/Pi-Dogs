const initialState={
    dogs:[],
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
        case "FILTER_BY_TEMPERAMENTS":
            const allDogs= state.allDogs;
            const filter= action.payload === "All" ? allDogs : allDogs.filter(element => element.temperament?.includes(action.payload))
            return{
                ...state,
                dogs: filter
            }
        case "ORDER_BY_NAME":
            let sorted= action.payload === "asc" ? state.dogs.sort(function(a,b){
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
                dogs: sorted,
             }
        default:
            return state;
    }
}

export default rootReducer;