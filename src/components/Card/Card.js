import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" alt={props.title} src={props.image} />
            <div className="overlay">
                <div className="overlay-content">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default Card;


