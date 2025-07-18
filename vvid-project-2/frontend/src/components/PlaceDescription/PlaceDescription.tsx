import { FC } from 'react'

import './place-description.pcss'

export const PlaceDescription: FC = () => {
  return (
    <section className="section description">
        <div className="container">
            <div className="description-inner">
                <h4 className="description-title">Описание</h4>
            </div>
        </div>
    </section>
  )
}
