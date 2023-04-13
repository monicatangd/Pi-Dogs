import React, {useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {updateDog} from "../../redux/actions";
import {useDispatch} from "react-redux";
import "../FormPage/FormPage.css";


function validate(input){
    let errors = {};
        if ( !input.name) {  
            errors.name = "A name is required";
        } else if (!input.image) {
            errors.image = "A image is required";
        } else if (!input.height_min) {
            errors.height_min = "Minium height required";
        } else if (!input.height_max) {
          errors.height_max = "Max height required";
        } else if (!input.weight_min){
            errors.weight_min="Minium weight required";
        }else if(!input.weight_max){
            errors.weight_max="Max weight required";
        }else if(!input.life_span){
            errors.life_span="life span required";
        }else if(parseInt(input.height_min)>parseInt(input.height_max)){
            errors.height_min="enter a smaller number"
        }else if(!/^[0-9]+$/.test(input.height_min)){
            errors.weight_min="must only contain numbers"
        }else if(!/^[0-9]+$/.test(input.height_max)){
            errors.weight_max="must only contain numbers"
        }else if(parseInt(input.weight_min)>parseInt(input.weight_max)){
            errors.weight_min="enter a smaller number"
        }else if(!/^[0-9]+$/.test(input.weight_min)){
            errors.weight_min="must only contain numbers"
        }else if(!/^[0-9]+$/.test(input.weight_max)){
            errors.weight_max="must only contain numbers"
        }else{
            document.querySelector(".btn").disabled = false;
        }
        return errors;
}

export default function FormPage (){
    const {id}=useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        image: "",
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: ""
    })
    


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    

   
    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateDog(input, id));
        alert("Update completed!");
        setInput({
            image: "",
            name: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            life_span: "",
        })
        history.push("/home")
    }
    

    return(
        <div className="cont">
            <Link to={"/detail/"+id}><button>Back</button></Link>
            <h1>Create breed</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image: </label>
                    <input type="text" required  value={input.image} placeholder="Enter image url..." className="input" name="image" onChange={handleChange}/> 
                    {errors.image &&(<p className="error">{errors.image}</p>)}
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter breed name..." value={input.name} className="input" name="name" onChange={handleChange}/>
                    {errors.name &&(
                        <p className="error">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" placeholder="Min..." value={input.height_min} className="min_max" name="height_min" onChange={handleChange}/>
                    <input type="text" placeholder="Max..." value={input.height_max} className="min_max" name="height_max" onChange={handleChange}/>
                    {errors.height_min &&(<p className="error">{errors.height_min}</p>)}
                    {errors.height_max &&(<p className="error">{errors.height_max}</p>)}
                </div>
                <div>
                    <label>Weight: </label>
                    <input type="text" placeholder="Min..." value={input.weight_min} className="min_max" name="weight_min" onChange={handleChange}/>
                    <input type="text" placeholder="Max..."value={input.weight_max} className="min_max" name="weight_max" onChange={handleChange}/>
                    {errors.weight_min &&(<p className="error">{errors.weight_min}</p>)}
                    {errors.weight_max &&(<p className="error">{errors.weight_max}</p>)}
                </div>
                <div>
                    <label>Life span: </label>
                    <input type="text" placeholder="Enter life span..." value={input.life_span} className="input" name="life_span" onChange={handleChange}/>
                    {errors.life_span &&(<p className="error">{errors.life_span}</p>)}
                </div>
                <br/>
                <button  type="submit" className="btn" disabled>Update</button>
                
            </form>
            
           
                
        </div>
    )
}