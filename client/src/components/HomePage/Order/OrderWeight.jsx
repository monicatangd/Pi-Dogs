import React from "react";
import { orderByWeight } from "../../../redux/actions";

export function OrderWeight({setCurrentPage, setOrder, dispatch}){

    function handleOrderByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <label>Sort by weight</label><br/>
            <select onChange={handleOrderByWeight}>
            <option hidden value="default">Select order...</option>
                <option value="asc">Weight asc...</option>
                <option value="desc">Weight desc...</option>
            </select>
        </div>
    )
}