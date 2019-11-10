import React,{Fragment,useContext} from 'react'
import Info from './components/Info';
import Nav from './components/Nav';
import Publication from './components/Publication';
import AsideInfo from './components/Aside_Info';
import './style.css'
import { UserContext } from './../../Providers/UserProvider'
import Login from '../InicioSesion/Login';

const Home =()=>{

    const user = useContext(UserContext);

    return (
        
       user?<Fragment>
            
            <Nav/>
            <div class="container-fluid gedf-wrapper">
                <div class="row">
                <Info 
                    userName="@LeeCross"
                    fullName="Fullname : Miracles Lee Cross"
                    description="Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
                    etc."
                    followers="5.2342"
                    following="6758"
                    contact="Vestibulum at eros"
                />
                <Publication user={user} />
                <AsideInfo/>
                </div>
            </div>
            
        </Fragment>:<Login></Login>
        
    )
}

export default Home;