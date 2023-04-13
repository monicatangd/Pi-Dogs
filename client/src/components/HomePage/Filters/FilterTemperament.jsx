import React from "react";
import {useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";
import { filterTemperaments, getTemperaments} from "../../../redux/actions";

export function FilterTemperament({setCurrentPage}){
    const dispatch= useDispatch();
    const allDogs=useSelector ((state=> state.dogs))
    const allTemperaments = useSelector(state => state.temperament);

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

   

    function handlerFilter(e){
        
        dispatch(filterTemperaments(e.target.value));
        setCurrentPage(1);
        
    }
    return(
        <div>
            <label>Filter by temperament</label><br/>
            <select onChange={e=>handlerFilter(e)}>
                <option value="All">All</option>
                {allTemperaments.map((temperament, idx) =>
                <option key={idx} value={temperament.name}>{temperament.name}</option>)}
            </select>
        </div>
    )
}