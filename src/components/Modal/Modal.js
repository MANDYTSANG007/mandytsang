import React from "react";
import "./Modal.css";

const Modal = ({id, image, title, description, repoURL, onClose, show}) => {

    return(
        <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={e=> e.stopPropagation()}>
                <img className="modal-image" alt={title} src={image} />
                <div className="modal-header">
                    <h6 className="modal-title">{title}</h6>
                </div>
                <div className="modal-body">
                    {description}
                </div>
                <div className="modal-footer">
                    <a href={repoURL} target="_blank" rel="noopener noreferrer" className="modal-link"> Details </a>
                    <button onClick={onClose} className="modal-button"> Close </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
