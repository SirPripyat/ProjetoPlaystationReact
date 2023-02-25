import React from "react";
import './card-02.css';

function Card02() {

    const card02_background = {
        backgroundImage: 'url(./assets/card02-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="card-02">
            <div class="card-02__background" style={card02_background}></div>
            <div className="card-02__information">
                <h4 className="information__title">Controle sem fio Dualsense™</h4>
            </div>
        </div>
    )

}

export default Card02;