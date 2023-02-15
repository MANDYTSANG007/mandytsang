import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" alt={props.title} src={props.image} />
        </div>
    )
}

export default Card;


