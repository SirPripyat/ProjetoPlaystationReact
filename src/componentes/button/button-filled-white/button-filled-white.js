import React from "react";
import './button-filled-white.css';

function ButtonFilledWhite(props) {

    return (
        <button
            className="button-filled-white"
        >
            {props.text}
        </button>
    )

}

export default ButtonFilledWhite;