import React, { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";


const Card = ({id, title, description, repoURL, image }) => {
    const [show, setShow] = useState(false);

    return (
        <div onClick={() => setShow(true)} className="card">
            <Modal 
                id={id}
                title={title}
                description={description}
                repoURL={repoURL}
                onClose={() => setShow(false)} 
                show={show}/>
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



// when an image is click, a new screen is open.
// the screen has a button to close the screen
// the screen also has a button to go to the project's url

//the overlay is similar to the @media query that we set up
// for the home screen