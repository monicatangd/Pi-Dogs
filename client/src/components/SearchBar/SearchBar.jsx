import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";

export default function SearchBar({setCurrentPage}){
    const dispatch =useDispatch();
    const [name, setName]= useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameDogs(name));
        setCurrentPage(1);
        document.querySelector(".search").value="";

    }
    return(
        <div>
            <input type="text" className="search" placeholder="Enter name..." onChange={(e)=> handleInputChange(e)}/>
            <button type="submit" onClick={(e)=> handleSubmit(e)}>Search</button>
        </div>
       
    )
}