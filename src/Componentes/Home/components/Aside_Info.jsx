import React from 'react'
import AsideCard from './Aside_Card'

const Aside_Info = () => {
    return (
        <div class="col-md-3">
            <AsideCard
                title = "Card title"
                subtitle = "Card subtitle"
                content = "Some quick example text to build on the card title and make up the bulk of the cards content"
            />
            <AsideCard
                title = "Grupo Colaborativo"
                subtitle = "Hooks"
                content = "This is a practice about how build a template of the new Social Red creating by Kevin Esquivel, Kevin Hernandez and Engel Prado"
            />
        </div>
    )
}

export default Aside_Info
