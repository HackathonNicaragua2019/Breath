import React from 'react'

const Aside_Card = (props) => {
    return (
        <div className="card gedf-card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                <p className="card-text">{props.content}</p>
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default Aside_Card
