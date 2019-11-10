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

          let datos= await firestore.collection("users").doc(uid).onSnapshot(e=>{
              
             
          console.log(e.data())
          setPerfil(e.data())
          })


       } 

       getDatos()
        
    },[])
    

    return (
        <Fragment>
            {
                !perfil ? <Login></Login> :

                    <Fragment>
                        <div class="main-content">
                            {/* <Nav
                                img={perfil.photoURL}
                                userName={perfil.displayName} /> */}

                            <Presentation
                                fullName={perfil.displayName}
                            />

                            <div class="container-fluid mt--7">
                                <div class="row">

                                    <AsideCard uid={uid} photo={perfil.photoURL} name={perfil.displayName} />
                                    <MyAccount perfil={perfil}/>
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
