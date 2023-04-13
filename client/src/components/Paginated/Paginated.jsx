import React from "react";
import "./Paginated.css";

export default function Paginated({dogsPerPage, allDogs, paginated}){
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumbers?.map(number =>(
                    <li className="number" key={number}>
                        <button onClick={()=> paginated(number)}>{number}</button>
                    </li>
                ))}
                
            </ul>
        </nav>
    )
}