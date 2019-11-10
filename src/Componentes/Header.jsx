import React,{useContext,Fragment} from 'react'
import { UserContext } from './../Providers/UserProvider'
import {Link} from '@reach/router'
import { signOut} from './../firebase';

const Header=()=>{
     const user = useContext(UserContext);
   
     console.log(user)
      
     const Auth=()=>{
        return user ? <button class="btn-light action-button btn" onClick={signOut} >Salir</button>:<Fragment>
        <button class="btn-light action-button btn" to="/login" >Log In</button><button class=" btn btn-light action-button" role="button" to="/login">Sign Up</button>     
        </Fragment>
     }

  return(
     <div>
      <nav class="navbar navbar-dark navbar-expand-md  navigation-clean-search ">
          <div class="container"><Link class="navbar-brand" to="/home">Breath</Link><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class=""></span></button>
              <div class="collapse navbar-collapse"
                  id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li role="presentation" class="nav-item"></li>
                      <li class="dropdown nav-item"><img data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link rounded" src={ user && user.photoURL}></img>
                          <div  class="dropdown-menu"><Link role="presentation" class="dropdown-item" to={`/profile/${user&&user.uid}`} >Mi perfil</Link><a role="presentation" class="dropdown-item" href="#">Configuracion de privacidad</a></div>
                      </li>
                  </ul>
                  <form class="form-inline mr-auto" target="_self">
                      
                  </form>
                 {
                  <Auth></Auth>  
                 }
                 </div>
          </div>
      </nav>
      
  
     </div>

  ) 

}

export default Header;