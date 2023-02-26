import React from "react";
import './principal-banner.css';
import ButtonFilledWhite from '../../button/button-filled-white/button-filled-white';

function PrincipalBanner() {

    const PrincipalBanner_background = {
        backgroundImage: 'url(./assets/principalBanner-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div style={PrincipalBanner_background} className="principal-banner">
            <h2 className="principal-banner__title">
                ESTE MÊS <span className="title__destaque">NO PLAYSTATION®</span>            
            </h2>
            <p className="principal-banner__texto">Confira os maiores lançamentos deste mês, além de recursos exclusivos, guias e muito mais.</p>
            <ButtonFilledWhite text="Saiba mais" />
        </div>
    )

}

export default PrincipalBanner;