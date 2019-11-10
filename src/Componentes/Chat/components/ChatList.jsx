import React,{useEffect,useState} from 'react'
import ChatInfo from './ChatInfo'
import { firestore } from '../../../firebase'
import {Link} from '@reach/router'
const ChatList = ({id}) => {

    const [msj,setmsj]=useState(null)
   

    useEffect(()=>{

     async function getBandeja(){

        if(id!==null){
            console.log(id) 
        let bandeja=await firestore.collection("users").doc(id).collection("bandeja").get() 
         setmsj(bandeja)
       // console.log(bandeja.docs[0].data()) 
        }

     } 
     
     getBandeja()


    },[id])  


    return (
        <div className="inbox_chat">
           {
               msj && msj.docs.map(el=>{
                   console.log(el.data())
                   return <a href={`/chat/${el.data().id}`}> <ChatInfo
                   img={el.data().photo}
                   userName={el.data().name}
                   shortMessage={el.data().content}
                   time="Dec 25"
               /></a>
               })
           }
        </div>
    )
}

export default ChatList
