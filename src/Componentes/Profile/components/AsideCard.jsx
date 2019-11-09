import React from 'react'
import Img from './Aside_Card/Img'
import SocialData from './Aside_Card/Social_Data'
import Content from './Aside_Card/Content'
import Buttons from './Aside_Card/Buttons'

const AsideCard = (props) => {
    return (

        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">

                <Img
                    img="https://pbs.twimg.com/profile_images/1183511104795893761/h2mm3nv__400x400.jpg"
                />

                <Buttons/>

                <div class="card-body pt-0 pt-md-4">
                    <SocialData
                        friends="22"
                        photos="10"
                        comments="89"
                    />

                    <Content
                        userName="Engels Prado"
                        age="22"
                        location="Bucharest, Romania"
                        job="Solution Manager - Creative Tim Officer"
                        education="University of Computer Science"
                        description="Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
                    />
                </div>


            </div>
        </div>
    )
}

export default AsideCard
