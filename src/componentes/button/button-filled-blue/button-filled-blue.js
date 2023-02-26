import React from "react";
import './button-filled-blue.css';

function ButtonFilledBlue(props) {

    return (
        <button
            className="button-filled"
        >
            {props.text}
        </button>
    )

}

export default ButtonFilledBlue;