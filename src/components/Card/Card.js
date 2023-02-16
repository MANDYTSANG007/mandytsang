import React, { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";


const Card = ({ id, title, description, repoURL, image }) => {
    const [show, setShow] = useState(false);

    return (
        <div onClick={() => setShow(true)} className="card">
            <Modal
                id={id}
                image={image}
                title={title}
                description={description}
                repoURL={repoURL}
                onClose={() => setShow(false)}
                show={show} />
            <img className="card-img" alt={title} src={image} />
            <div className="overlay">
                <div className="overlay-content">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Card;
