import { FC } from 'react';

import map from "@/assets/images/map.jpg"

import "./place-residence.pcss";

export const PlaceResidence: FC = () => {
    return (
        <section className="section residence">
            <div className="container">
                <div className="residence-inner">
                    <h4 className="residence-title">Места проживания</h4>
                    <img className="residence-img" src={map} alt="Карта" />
                </div>
            </div>
        </section>
    )
};
