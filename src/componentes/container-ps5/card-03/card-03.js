import React from "react";
import './card-03.css';

function Card03() {

    const Card03_background = {
        backgroundImage: 'url(./assets/Card03-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="card-03">
            <div class="card-03__background" style={Card03_background}></div>
            <div className="card-03__information">
                <h4 className="information__title">Headset sem fio PULSE 3D™</h4>
            </div>
        </div>
    )

}

export default Card03;