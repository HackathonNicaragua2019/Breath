import React,{useEffect,useContext} from 'react'
import ChatList from './components/ChatList'
import HeaderSearch from './components/Header_Search'
import Mensajes from './components/Mensajes'
import './style.css'
import { UserContext } from './../../Providers/UserProvider'

const Chat = (props) => {

   console.log(props.id)
   
   const user = useContext(UserContext);

  
    

    return (
        <div className="container">
            <h3 className="text-center">Messaging</h3>

            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                        <HeaderSearch />
                        <ChatList />
                    </div>
                    <Mensajes user={user && user} para={props.id} />
                </div>
                <p className="text-center top_spac"> Design by <a target="_blank" href="/">Hooks</a></p>
            </div>
        </div>
    )
}

export default Chat;