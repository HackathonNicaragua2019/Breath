import React, { Fragment, useContext,useEffect } from 'react'
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

    console.log(user)
    return (
        <Fragment>
            {
                !user ? <Login></Login> :

                    <Fragment>
                        <div class="main-content">
                            <Nav
                                img={user.photoURL}
                                userName={user.displayName} />

                            <Presentation
                                fullName="Engels"
                            />

                            <div class="container-fluid mt--7">
                                <div class="row">

                                    <AsideCard photo={user.photoURL} name={user.displayName} />
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
