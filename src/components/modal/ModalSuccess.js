import React from 'react';
import ReactDOM from "react-dom";

const ModalSuccess = () => {
    return ReactDOM.createPortal(
        <div>
            
        </div>,
        document.querySelector("body")
    );
};

export default ModalSuccess;