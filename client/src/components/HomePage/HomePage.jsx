import React from "react";
import {useState, useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDogs} from "../../actions";
import {Link} from "react-router-dom";
import { FilterTemperament } from "./FilterTemperament";
import { FilterOrigen } from "./FilterOrigen";
import Card from "../Card.jsx";
import { OrderBreed } from "./OrderBreed";
import { OrderWeight } from "./OrderWeight";
import logo from "../LandingPage/title.png";
import Paginated from "../Paginated.jsx";

export default function HomePage(){
    
    const dispatch = useDispatch();
    const allDogs=useSelector ((state=> state.dogs))
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog);

    const paginated = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDogs())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    return(
        <div>
            <img src={logo} alt="logo" width="200px" height="150px"/>
            <br/>
            <Link to= "/dogs">
                <button>Create breed</button>
            </Link>
            
            <button onClick={e=> {handleClick(e)}}> 
                Reload
            </button>
            <div>
                <FilterTemperament />
                <FilterOrigen/>
                <OrderBreed/>
                <OrderWeight/>
                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                />
                {currentDog?.map((dog)=>{
                    return(
                        <fragment>
                         <Link to={"/home"+dog.id}>
                            <Card image={dog.image} name={dog.name} temperament={dog.temperament} weight={dog.weight}/>
                         </Link>
                        </fragment>
                    );
                })}
            </div>
        </div>
    )
}
