import React from "react";
import './button-filled.css';

function ButtonFilled(props) {

    return (
        <button
            className="button-filled"
        >
            {props.text}
        </button>
    )

}

export default ButtonFilled;