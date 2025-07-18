import { FC } from 'react';

import taganrog from "@/assets/images/taganrog.jpg"

import "./place-taganrog.pcss";

export const PlaceTaganrog: FC = () => {
    return (
        <section className="section taganrog">
            <div className="container">
                <div className="taganrog-inner">
                    <h4 className="taganrog-title">Место проведения<br />Таганрог</h4>
                    <img className="taganrog-img" src={taganrog} alt="Таганрог" />
                </div>
            </div>
        </section>
    )
};
