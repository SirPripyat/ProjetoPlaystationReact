import React from "react";
import BannerSecundario from "./banner-secundario/banner-secundario";
import './este-mes.css';
import PrincipalBanner from "./principal-banner/principal-banner";

function EsteMes() {

    return (
        <section className="este-mes">
            <PrincipalBanner />
            <BannerSecundario />
        </section>
    )

}

export default EsteMes;