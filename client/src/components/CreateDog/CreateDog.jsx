import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import {postDogs, getTemperaments} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import "./CreateDog.css";

export default function CreateDog (){
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state)=> state.temperament);

    const [input, setInput] = useState({
        image: "",
        name: "",
        height: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        temperament: []
    })

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input);
        dispatch(postDogs(input));
        alert("Perro creado");
        setInput({
            image: "",
            name: "",
            height: "",
            weight_min: "",
            weight_max: "",
            life_span: "",
            temperament: []
        })
        history.push("/home")
    }

    return(
        <div className="cont">
            <Link to="/home"><button>Back</button></Link>
            <h1>Create breed</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image: </label>
                    <input type="text" placeholder="Enter image url..." value={input.image} className="input" name="image" onChange={handleChange}/> 
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter breed name..." value={input.name} className="input" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" placeholder="Enter breed height..." value={input.height} className="input" name="height" onChange={handleChange}/>
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="text" placeholder="Min..." value={input.weight_min} className="weight" name="weight_min" onChange={handleChange}/>
                    <input type="text" placeholder="Max..."value={input.weight_max} className="weight" name="weight_max" onChange={handleChange}/>
                </div>
                <div>
                    <label>Life span: </label>
                    <input type="text" placeholder="Enter life span..." value={input.life_span} className="input" name="life_span" onChange={handleChange}/>
                </div>
                <label>Temperamet: </label>  
                <select onChange={handleSelect}>
                    {temperaments.map((temp)=>(
                        <option valut={temp.name}>{temp.name}</option>
                    ))}
                </select>
                <ul><li>{input.temperament.map(el=> el + ", ")}</li></ul>
                <button type="submit">Create Breed</button>
                
            </form>
        </div>
    )
}