import React from "react";
import "./Card.css";

export default function Card({image, name, temperament, weight_min, weight_max}){
    
    return(
        
        <div className="card">
            <img src={image}  alt="img not found"/>
            <h3>{name}</h3>
            <h5>Temperament: {temperament}</h5>
            <h5>Weight: {weight_min} - {weight_max}</h5> 
        </div>
        
    );
}