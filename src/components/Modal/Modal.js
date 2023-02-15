import React from "react";
import "./Modal.css";

const Modal = ({id, title, description, repoURL, onClose, show}) => {
    if (!show) {
        return null;
    }
    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e=> e.stopPropagation()}>
                <div className="modal-header">
                    <h6 className="modal-title">{title}</h6>
                </div>
                <div className="modal-body">
                    {description}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="modal-button"> Close </button>
                </div>
            </div>
        </div>

        
    )
}
export default Modal;
