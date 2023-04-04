const initialState={
    dogs:[],
    allDogs:[],
    temperament: [],
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
            const allDogs= state.allDogs
            const filter= action.payload === "All" ? allDogs : allDogs.filter(element => element.temperament.includes(action.payload))
            return{
                ...state,
                dogs: filter
            }
        default:
            return state;
    }
}

export default rootReducer;