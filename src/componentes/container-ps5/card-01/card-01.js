import React from "react";
import './card-01.css';

function Card01() {

    const cardPrincipal__background = {
        backgroundImage: 'url(./assets/cardPrincipal-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    return (
        <div className="card-01">
            <div class="card-01__background" style={cardPrincipal__background}></div>
            <div className="card-01__information">
                <h4 className="information__title">Console PlayStation 5</h4>
                <p className="information__description">Descubra uma nova geração de jogos incríveis.</p>
            </div>
        </div>
    )

}

export default Card01;