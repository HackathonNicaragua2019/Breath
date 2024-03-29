import React, { Fragment,useState,useEffect } from 'react'
import {firestore,auth} from './../../../firebase'
import './style.css'
import moment from 'moment'
import {Link} from '@reach/router'
const uuidv4 = require('uuid/v4');

const Post = (props) => {

   const [idPost,setIdPost]=useState(props.id)
   const [id,setId]=useState('collapseExample'+uuidv4())
   const [coment,setComent]=useState('')
   const [listComents,setList]=useState(null)

   useEffect(()=>{
     let comentarios
  
    async function getComents(){

        comentarios=await firestore.collection("posts").doc(idPost).collection("coments").onSnapshot(el=>{
           setList(el)
        
        })
        
      

    }  

    getComents()

  },[idPost]) 
   
  console.log(listComents)

   const comentar=()=>{
  
    
    console.log(coment)

    console.log(idPost)
    const user=auth.currentUser  

     const comentario={
       content: coment,
       usuario:{
          id:user.uid,
          name:user.displayName,
          photo:user.photoURL  
       },
       createdAt:  Math.round((new Date()).getTime() / 1000),
       
     }
  
     firestore.collection("posts").doc(idPost).collection("coments").add(comentario) 
     
   }

    return (
        <Fragment>
            <div class="card gedf-card post_card">
                <div class="card-header estilos-post">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" src={props.userImage} alt=""/>
                                </div>
                                <div class="ml-2">
                                    <Link class="h5 m-0" to={`/profile/${props.link}`} >@{props.userName}</Link>
                                    <div class="h7 text-muted">{props.fullName}</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuración</div>
                                        <a class="dropdown-item" href="#">Guardar</a>
                                        <a class="dropdown-item" href="#">Esconder</a>
                                        <a class="dropdown-item" href="#">Reportar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body estilos-post">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{props.timeShared}</div>
                       

                        <p class="card-text">
                            {props.content}
                        </p>
                    </div>
                    <div class="card-footer estilos-post">
                        <a href="/" class="card-link"><i class="fa fa-gittip"></i> Me gusta</a>
                        <a class="card-link" data-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fa fa-comment"></i> Comentar
                        </a>

                        <div class="collapse" id={id}>
                        <div class="card card-body">
                             <div className="form-group">
                                <label className="sr-only" for="message">enviar</label>
                                <textarea value={coment} onChange={(evt=>{setComent(evt.target.value)})} className="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                <button onClick={comentar}  type="button" class="btn btn-outline-info">Comentar</button>
                            </div>

                            <div class="comment-main-level">
                          
                             
                               {
                                  listComents && listComents.docs.map(data=>{
                                    return <Fragment>
                                     <div class="comment-avatar"><img src={data.data().usuario.photo} className="rounded-circle" alt=""/></div>

                                         <div class="comment-box">
                                            <div class="comment-head">
                                                <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">{data.data().usuario.name}</a></h6>
                                                <span> {moment(new Date(data.data().createdAt *1000)).fromNow()}</span>
                                                <i class="fa fa-reply"></i>
                                                <i class="fa fa-heart"></i>
                                            </div>
                                            <div class="comment-content">
                                               {
                                                   data.data().content
                                               } 
                                            </div>
                                        </div>
                                    </Fragment> 

                                  })  
                               }
                            </div>
                            </div>
                        </div>
                      
                        <a href="/" class="card-link"><i class="fa fa-mail-forward link-compartir"></i> Compartir</a>
                    </div>
                </div>
        </Fragment>
            )
        }
        
        export default Post
