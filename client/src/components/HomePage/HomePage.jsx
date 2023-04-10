import React from "react";
import {useState, useEffect}from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDogs} from "../../actions";
import {Link} from "react-router-dom";
import { FilterTemperament } from "./Filters/FilterTemperament";
import { FilterOrigen } from "./Filters/FilterOrigen";
import Card from "../Card/Card.jsx";
import { OrderBreed } from "./Order/OrderBreed";
import { OrderWeight } from "./Order/OrderWeight";
import logo from "../LandingPage/title.png";
import Paginated from "../Paginated/Paginated.jsx";
import SearchBar from "../SearchBar";
import "./HomePage.css";

export default function HomePage(){
    
    const dispatch = useDispatch();
    const allDogs=useSelector ((state=> state.dogs))
    const [order, setOrder] =useState(' ');
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
        <div > 
            <header className="header">
                <div className="head"> 
                    <img src={logo} alt="logo" />
                     <br/>
                     <Link to= "/dog">
                        <button>Create breed</button>
                     </Link>
                    <SearchBar/>
                 </div>
            </header>
            <div className="homePage">
            <div className="filters">
                <button onClick={e=> {handleClick(e)}}> 
                    Reload
                </button>
                <FilterTemperament />
                <FilterOrigen dispatch={dispatch}/>
                <OrderBreed setCurrentPage={setCurrentPage} setOrder={setOrder} dispatch={dispatch}/>
                <OrderWeight setCurrentPage={setCurrentPage} setOrder={setOrder} dispatch={dispatch}/>
            </div>
            <div className="cards">
                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                />
                {currentDog?.map((dog)=>{
                    return(
                        <fragment>
                         <Link to={`/detail/${dog.id}`}>
                            <Card image={dog.image} name={dog.name} temperament={dog.temperament} weight_min={dog.weight_min} weight_max={dog.weight_max}/>
                         </Link>
                        </fragment>
                    );
                })}
            </div>
            </div>
        </div>
    )
}
