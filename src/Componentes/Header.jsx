import React,{useContext,Fragment} from 'react'
import { UserContext } from './../Providers/UserProvider'
import {Link} from '@reach/router'
import { signOut} from './../firebase';

const Header=()=>{
     const user = useContext(UserContext);
   
     console.log(user)
      

      

     const Auth=()=>{
        return user ?<Fragment>
            
             <button class="btn-light action-button btn" onClick={signOut} >Testimonios</button>
             <button class="btn-light action-button btn" onClick={signOut} > Conecta</button>
             <button class="btn-light action-button btn" onClick={signOut} >Salir</button>
        </Fragment>:<Fragment>
        <Link class="btn-light action-button btn" to="/login" >Inicior sesion</Link><button class=" btn btn-light action-button" role="button" to="/login">Regístrate</button>     
        </Fragment>
     }

  return(
     <div>
      <nav class="navbar navbar-dark navbar-expand-md  navigation-clean-search ">
          <div class="container"><Link class="navbar-brand" to="/home">Breath</Link><button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class=""></span></button>
              <div class="collapse navbar-collapse"
                  id="navcol-1">
                
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