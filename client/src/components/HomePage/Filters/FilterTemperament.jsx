import React from "react";
import {useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";
import { filterTemperaments, getTemperaments} from "../../../redux/actions";

export function FilterTemperament(){
    const dispatch= useDispatch();
    const allTemperaments = useSelector(state => state.temperament);

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    function handlerFilter(e){
        dispatch(filterTemperaments(e.target.value));
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