import React from "react";
import {filterByOrigin} from "../../../actions";

export function FilterOrigen({dispatch}){
    function handleFilterByOrigin(e){
        dispatch(filterByOrigin(e.target.value));
    }

    return(
        <div>
            <label>Filter by origin</label>
            <select onChange={handleFilterByOrigin}>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="api">Existing</option>
            </select>
        </div>
    )
}