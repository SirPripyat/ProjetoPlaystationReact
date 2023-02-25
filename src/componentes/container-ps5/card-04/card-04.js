import React from "react";
import './card-04.css';

function Card04() {

    const Card04_background = {
        backgroundImage: 'url(./assets/card04-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="card-04">
            <div class="card-04__background" style={Card04_background}></div>
            <div className="card-04__information">
                <h4 className="information__title">Controle sem fio DualSense Edge™</h4>
                <p className="information__description">Tire proveito dos botões customizáveis, gatilhos, controles e capas de botões personalizáveis, além de botões posteriores e muito mais.</p>
            </div>
        </div>
    )

}

export default Card04;