import React from "react";
import Card01 from "./card-01/card-01";
import Card02 from "./card-02/card-02";
import Card03 from "./card-03/card-03";
import Card04 from "./card-04/card-04";
import './container-ps5.css';

function ContainerPS5() {

    return (
        <section className="container-ps5">
            <h1 className="container-ps5__title">Trazendo o extraordinário até você</h1>
            <div className="container-ps5__cards">
                <div className="cards__main-card">
                    <Card01 />
                </div>
                <div className="cards__column">
                    <div className="cards__row">
                        <Card02 />
                        <Card03 />
                    </div>
                    <Card04 />
                </div>

            </div>
        </section>
    )

}

export default ContainerPS5;