import React from "react";
import "./Card.css";
import { deleteDog, getDogs} from "../../redux/actions";


export default function Card({id, image, name, temperament, weight_min, weight_max, createdInDb, dispatch}){
    
    function handleDelete(e, id){
        e.preventDefault();
        dispatch(deleteDog(id));
        dispatch(getDogs());
    }
    return(
        
        <div className="card">
            
            {createdInDb? 
            <div>
            <img src={image}  alt="img not found"/>
            <h3>{name}</h3>
            <h5>Temperament: {temperament}</h5>
            <h5>Weight: {weight_min} - {weight_max} lb</h5> 
            <button onClick={(e)=> handleDelete(e, id)}>Delete</button>
            </div>: 
            <div>
            <img src={image}  alt="img not found"/>
            <h3>{name}</h3>
            <h5>Temperament: {temperament}</h5>
            <h5>Weight: {weight_min} - {weight_max} lb</h5> 
            </div>}
        </div>
        
    );
}