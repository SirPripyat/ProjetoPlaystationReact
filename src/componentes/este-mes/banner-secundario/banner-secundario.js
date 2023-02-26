import React from "react";
import './banner-secundario.css';

function BannerSecundario() {
    
    return (
        <div className="banner-secundario">
            <div className="banner-secundario__card">
                <img src="./assets/card-1-image.png" alt="Imagem do card" className="card__thumbnail"/>
                <h3 className="card__title">Como o controle sem fio DualSense Edge pode melhorar sua jogabilidade</h3>
            </div>
            <div className="banner-secundario__card">
                <img src="./assets/card-2-image.png" alt="Imagem do card" className="card__thumbnail"/>
                <h3 className="card__title">23 jogos imperdíveis que chegam em 2023</h3>
            </div>
            <div className="banner-secundario__card">
                <img src="./assets/card-3-image.png" alt="Imagem do card" className="card__thumbnail"/>
                <h3 className="card__title">O Guia PlayStation para Bem-estar físico e mental</h3>
            </div>
        </div>
    )

}

export default BannerSecundario;