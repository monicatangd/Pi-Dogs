import React from "react";
import {filterByOrigin} from "../../../redux/actions";

export function FilterOrigen({dispatch}){
    function handleFilterByOrigin(e){
        dispatch(filterByOrigin(e.target.value));
    }

    return(
        <div>
            <label>Filter by origin</label><br/>
            <select onChange={handleFilterByOrigin}>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="api">Existing</option>
            </select>
        </div>
    )
}