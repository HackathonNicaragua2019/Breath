import React from 'react'

const Aside_Card = (props) => {
    return (
        <div className="card gedf-card card-css">
            <img src='https://www.psico.org/Images/people.png?v=1' alt="..." class="rounded"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 color_t">{props.subtitle}</h6>
                <p className="card-text texto-card">{props.content}</p>
                <a href="/" className="card-link">Enlace de la tarjeta</a>
                <a href="/" className="card-link">Otro enlace</a>
            </div>
        </div>
    )
}

export default Aside_Card
