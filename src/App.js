import React,{useContext} from 'react';
// import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Content from './Componentes/Content';
import Chat from './Componentes/Chat/Chat';
import Home from './Componentes/Home/Home';
import {Router,Redirect} from '@reach/router'
import Profile from './Componentes/Profile/Profile';
import NotFound from './pages/404';
import Login from './Componentes/InicioSesion/Login';

function App() {

  return (
    <div className="App">
      
      <Header></Header>
      {/* <Chat/> */}
 
      <Router>
        <Content path='/' />
        <Chat path="/chat/:id" ></Chat>
        <Home path="/home" />
        <Profile path="/profile/:uid" /> 
        <Login path="/login"></Login>
        <NotFound default/>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
