import * as React from 'react';
import ButtonFilled from '../button-filled/button-filled';
import './banner-principal.css'

function BannerPrincipal() {

    const bannerPrincipal_background = {
        backgroundImage: 'url(./assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <section className="banner-principal" style={bannerPrincipal_background}>
            <div class="banner-principal__text-container">
                <img src="./assets/hogwarts-legacy-logo.svg" className='text-container__logo' alt="Banner de harry potter"/>
                <div>
                    <h1 className='text-container__title'>Escreva sua própria história</h1>
                    <p className='text-container__description'>Decida o destino do mundo bruxo neste novo RPG de ação imersivo em mundo aberto, já disponível para o PS5</p>
                </div>
                <ButtonFilled text="Saiba mais"/>
            </div>
        </section>
    )
}

export default BannerPrincipal;