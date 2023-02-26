import React from "react";
import './playstation-plus.css';
import ButtonFilledBlue from "../button/button-filled-blue/button-filled-blue";

function PlaystationPlus() {

    const playstationPlus_background = {
        backgroundImage: 'url(./assets/playstationPlus-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <section className="playstation-plus" style={playstationPlus_background}>
            <div className="playstation-plus__information">
                <img src="./assets/playstation-plus-logo.png" alt="Logo da playstation plus" className="information__logo"/>
                <p className="information__text">Melhore sua experiência PlayStation com o modo multijogador online, jogos mensais, descontos exclusivos e muito mais.</p>
                <ButtonFilledBlue text="Explore o Playstation Plus"/>
            </div>
            <a href=" " >
                <img src="./assets/playstation-plus-games.png" alt="Jogos do playstation plus" className="playstation-plus__games"/>
            </a>
        </section>
    )
}

export default PlaystationPlus;