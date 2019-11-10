import React,{useContext,Fragment} from 'react'
import { UserContext } from './../Providers/UserProvider'
import {Link} from '@reach/router'
import { signOut} from './../firebase';

const Header=()=>{
     const user = useContext(UserContext);
   
     console.log(user)
      
     const Auth=()=>{
        return user ? <button class="btn-light action-button btn" onClick={signOut} >Salir</button>:<Fragment>
        <button class="btn-light action-button btn" to="/login" >Inicior sesion</button><button class=" btn btn-light action-button" role="button" to="/login">Regístrate</button>     
        </Fragment>
     }

  return(
     <div>
      <nav class="navbar navbar-dark navbar-expand-md  navigation-clean-search ">
          <div class="container"><Link class="navbar-brand" to="/home">Breath</Link><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class=""></span></button>
              <div class="collapse navbar-collapse"
                  id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li role="presentation" class="nav-item"><a class="nav-link active" href="#">Link</a></li>
                      <li class="dropdown nav-item"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#">Dropdown </a>
                          <div role="menu" class="dropdown-menu"><a role="presentation" class="dropdown-item" href="#">First Item</a><a role="presentation" class="dropdown-item" href="#">Second Item</a><a role="presentation" class="dropdown-item" href="#">Third Item</a></div>
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