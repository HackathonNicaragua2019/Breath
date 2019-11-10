import React,{useEffect,useState,useContext} from 'react'
import MsgIn from './Msg_in'
import MsgOut from './Msg_out'
import {firestore,getUserDocument,auth} from './../../../firebase'
import { UserContext } from './../../../Providers/UserProvider'

const Mensajes = (props) => {

  const [content,setContent]=useState('')
  const [chats,setChats]=useState(null)
  const user = useContext(UserContext);
  const [id,setId]=useState(user.uid)                                       

   useEffect(()=>{

    async function getChats(){
       
      console.log(id)   
     let tuid='6a84686b-c022-438f-9a55-066e69643838' //Se recibira como parametro
     let myid=user.uid 
     let clave
     let datos
     console.log(datos.data()) 
     console.log(user)
     console.log("tuid"+tuid) 


     if(myid<tuid){
       clave=myid+tuid
     }else 
          clave=tuid+myid

      
     if (myid!==tuid){

       datos= await firestore.collection("chat").doc(clave).collection("chats").get()

       console.log(datos) 

     }

    } 
   
     getChats()

   })


   const send=async ()=>{
     
     let tuid='6a84686b-c022-438f-9a55-066e69643838'
     let myid=user.uid 
     let clave
     let datos=  await firestore.collection("users").doc(tuid).get() 
     console.log(datos.data()) 
     console.log(user)
     console.log("tuid"+tuid) 


     if(myid<tuid){
       clave=myid+tuid
     }else 
          clave=tuid+myid

    console.log(clave)
      
    firestore.collection("chat").doc(clave).collection("chats").add({
        content,
        enviado:myid,
        recibido:tuid,
        createdAt:  Math.round((new Date()).getTime() / 1000)
    })
           
     
   } 



    return (
        <div class="mesgs">
            <div class="msg_history">
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="Test which is a new approach to have all solutions"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgOut
                    message="Test which is a new approach to have all solutions"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="Ok Everything it´s ok guys"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgOut
                    message="Apollo University, Delhi, India Test"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford."
                    time="11:01 AM"
                    date="June 9"
                />
            </div>

            <div class="type_msg">
                <div class="input_msg_write">
                    <input value={content} onChange={(e)=>{setContent(e.target.value)}} type="text" class="write_msg" placeholder="Type a message" />
                    <button onClick={send}  class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Mensajes
