import React, { Fragment, useContext } from 'react'
import { Redirect } from '@reach/router'
import './style.css'
import { UserContext } from './../../Providers/UserProvider'
import Login from '../InicioSesion/Login'

import Nav from './components/Nav'
import Presentation from './components/Presentation'
import Footer from './components/Footer'
import AsideCard from './components/AsideCard'
import MyAccount from './components/MyAccount'
import './style.css'

const Profile = () => {
    const user = useContext(UserContext);

    return (
        <Fragment>
            {
                !user ? <Login></Login> :

                    <Fragment>
                        <div class="main-content">
                            <Nav
                                img="https://pbs.twimg.com/profile_images/1183511104795893761/h2mm3nv__400x400.jpg"
                                userName="Engels Prado (Prodigio)" />

                            <Presentation
                                fullName="Engels"
                            />

                            <div class="container-fluid mt--7">
                                <div class="row">

                                    <AsideCard />
                                    <MyAccount />
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </Fragment>

            }

        </Fragment>
    )
}

export default Profile
