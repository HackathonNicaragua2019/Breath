import React,{useEffect,useState,useContext} from 'react'
import MsgIn from './Msg_in'
import MsgOut from './Msg_out'
import {firestore,getUserDocument,auth} from './../../../firebase'
import { UserContext } from './../../../Providers/UserProvider'


const Mensajes = (props) => {

  const [content,setContent]=useState('')
  const [chats,setChats]=useState(null)
  const user = useContext(UserContext);
  console.log(props.id)
  //const [id,setId]=useState(props.user.uid)                                       

      
            useEffect(()=>{

              async function getChats (){


                
                if( props.user && props.user.uid!==null){
                    
                    let tuid=props.para //Se recibira como parametro
                    let myid=props.user.uid
                    let clave
                    let datos
                   // console.log(datos.data()) 
        
                    console.log("tuid"+tuid) 
    
    
                    if(myid<tuid){
                        clave=myid+tuid
                    }else 
                            clave=tuid+myid
    
                        
                    if (myid!==tuid){
    
                        datos= await  firestore.collection("chat").doc(clave).collection("chats").get()
    
                        let getD= datos.docs.map(chat=>{
                          return  chat.data()
                        })

                        console.log(getD)
                        setChats(getD)
    
                    }
                    }
    
    
              }
 
               getChats() 


            },[props.user,user])

    

   const send=async ()=>{
     
     let tuid=props.para
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
              {
                  chats && chats.map(el=>{
                      console.log(el)

                    return el.enviado==user.uid?  <MsgOut
                    img="https://ptetutorials.com/images/user-profile.png"
                    message={el.content}
                    time="11:01 AM"
                    date="June 9"
                />: <MsgIn
                message={el.content}
                time="11:01 AM"
                date="June 9"
            />
               
                 
   

                  })
              }
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
