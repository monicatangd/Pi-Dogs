import React from "react";
import {useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";

export function FilterOrigen(){


    return(
        <div>
            <select name="" id="">
                <option value="All">All</option>
                <option value="Created">Created</option>
                <option value="Api">Existing</option>
            </select>
        </div>
    )
}