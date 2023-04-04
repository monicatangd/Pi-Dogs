import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css";
import title from "./title.png"
import dog from "./dog3.png"

export default function LandingPage(){
    return(
        <div className="landingPage">
           <img src={dog} alt="dog"/>
           <div className="title">
            <img src={title} alt="titulo"/><br/>
            <Link to="/home">
                <button>Enter</button>
            </Link>
            </div> 
            <div className="paragraph">
                <p>On this page you will find all the breeds of dogs with their<br/>
                   respective information such as: weight, height, life span, <br/>
                   temperament and their photo. <br/>
                   You can search for the breed you prefer by name.<br/>
                   If you consider that a dong breed is missing, you can create it.</p>
            </div>
        </div>
    );
}