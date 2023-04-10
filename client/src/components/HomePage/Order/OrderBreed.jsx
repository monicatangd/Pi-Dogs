import React from "react";
import {orderByName} from "../../../actions";

export function OrderBreed({setCurrentPage, setOrder, dispatch}){
    

    function handleOrderByName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    return(
        <div>
            <label>Sort by breed </label>
            <select onChange={e=> handleOrderByName(e)}>
            <option hidden value="default">Select order...</option>
                <option value='asc'>Asc...(A--Z)</option>
                <option value='desc'>Desc...(Z--A)</option>
            </select>
        </div>
    )
}