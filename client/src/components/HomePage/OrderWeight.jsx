import React from "react";

export function OrderWeight(){

    return(
        <div>
            <select>
            <option hidden value="default">Select order...</option>
                <option>More weight</option>
                <option>Less weight</option>
            </select>
        </div>
    )
}