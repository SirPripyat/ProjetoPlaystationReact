import * as React from 'react';
import ButtonFilledBlue from '../button/button-filled-blue/button-filled-blue';
import './banner-secundario.css'

function BannerSecundario() {

    const bannerSecundario_background = {
        backgroundImage: 'url(./assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <section className="banner-secundario" style={bannerSecundario_background}>
            <div class="banner-secundario__text-container">
                <div>
                    <h1 className='text-container__title'>A saga nórdica continua</h1>
                    <p className='text-container__description'>Embarque com Kratos e Atreus em uma jornada épica emocionante sobre apego e superação, já disponível para PS4 e PS5</p>
                </div>
                <ButtonFilledBlue text="Saiba mais"/>
            </div>
        </section>
    )
}

export default BannerSecundario;