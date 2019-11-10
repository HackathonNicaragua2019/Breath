import React, { Fragment, useContext,useEffect,useState } from 'react'
import { Redirect } from '@reach/router'
import './style.css'
import { UserContext } from './../../Providers/UserProvider'
import Login from '../InicioSesion/Login'

import Presentation from './components/Presentation'
import Footer from './components/Footer'
import AsideCard from './components/AsideCard'
import MyAccount from './components/MyAccount'
import './style.css'
import { firestore } from './../../firebase'


const Profile = ({uid}) => {
 

    const [perfil,setPerfil]=useState(null)

    useEffect(()=>{

      
       console.log(uid)

       async function getDatos(){

          let datos= await firestore.collection("users").doc(uid).get()

          console.log(datos.data())
          setPerfil(datos.data())

       } 

       getDatos()
        
    })
    

    return (
        <Fragment>
            {
                !perfil ? <Login></Login> :

                    <Fragment>
                        <div class="main-content">
<<<<<<< HEAD
                            <Nav
                                img={perfil.photoURL}
                                userName={perfil.displayName} />
=======
                            {/* <Nav
                                img={user.photoURL}
                                userName={user.displayName} /> */}
>>>>>>> 4016248de6b414b78b93663aabf6d7a9d0cb6db5

                            <Presentation
                                fullName="Engels"
                            />

                            <div class="container-fluid mt--7">
                                <div class="row">

                                    <AsideCard photo={perfil.photoURL} name={perfil.displayName} />
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
