import React from "react";
import {orderByName} from "../../actions";

export function OrderBreed({setCurrentPage, setOrder, dispatch}){
    

    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <select onChange={handleOrderByName}>
            <option hidden value="default">Select order...</option>
                <option value="asc">-A-</option>
                <option value="desc">-Z-</option>
            </select>
        </div>
    )
}