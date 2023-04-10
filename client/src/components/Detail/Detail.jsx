import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailDog} from "../../actions";
import "./Detail.css";

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch();
    const id= props.match.params.id;
    useEffect(() => {
        dispatch(detailDog(id))
    }, [dispatch, id])

    const theDog = useSelector((state) => state.detail)

    return(
        <div className="detail">
             <Link to="/home">
                <button>Back</button>
            </Link>
            {theDog ?
                <div >
                    <h1>{theDog[0].name}</h1>
                    <img src={theDog[0].image}/>
                    <p>Height: {theDog[0].height}</p>
                    <p>Weight: {theDog[0].weight_min} - {theDog[0].weight_max}</p>
                    <p>Life span: {theDog[0].life_span}</p>
                    <p>Temperaments: {theDog[0].temperament}</p>
                </div> : <p>Loading...</p>
            }
            
        </div>
    )
}