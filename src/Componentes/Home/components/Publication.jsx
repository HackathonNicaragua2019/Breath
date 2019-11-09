import React,{useEffect,useState} from 'react'
import Share from './Share'
import Post from './Post'
import {firestore,auth} from './../../../firebase'
import moment from 'moment'

const Publication = () => {

    const [post,setPost]=useState(null)
  

    console.log(post)
   useEffect(()=>{
  
    async function getData(){

       let posts=await firestore.collection("posts").get()
       
       setPost(posts)
     }

     getData()

   },[])

    return (
        <div class="col-md-6 gedf-main">
            <Share/>

            {
              post && post.docs.map(post=>{
                  console.log(post.data())
                  let data=post.data()
                 return <Post
                  id={data.id} 
                  userImage = {data.user.photoURL}
                  userName = {data.user.displayName}
                  fullName = {data.user.displayName}
                  timeShared = {moment(new Date(data.createdAt *1000)).fromNow()}
                  linkPrincipal = "Lorem ipsum dolor sit amet, consectetur adip."
                  content = {data.share}
                />
              })  
            }
            
        </div>
    )
}

export default Publication
