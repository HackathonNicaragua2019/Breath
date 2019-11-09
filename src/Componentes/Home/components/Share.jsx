import React, { Fragment,useState,useContext } from 'react'
import {firestore,auth} from './../../../firebase'
import { UserContext } from './../../../Providers/UserProvider'
const uuidv4 = require('uuid/v4');
const Share = () => {
    
    const user = useContext(UserContext); 
    const [share,setShare]=useState('');
    const id= uuidv4()
    const Share=()=>{
    
      let currentUser=auth.currentUser 
       console.log(currentUser)
       const post = {
        id,
        share,
        user: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        favorites: 0,
        comments: 0,
        createdAt:  Math.round((new Date()).getTime() / 1000),
      }
    
      firestore.collection("posts").doc(id).set(post) 
      setShare('')

    }

    console.log(share)
    return (
        <Fragment>
            <div className="card gedf-card">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                                    a publication</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                            <div className="form-group">
                                <label className="sr-only" for="message">post</label>
                                <textarea value={share} onChange={(e)=>setShare( e.target.value)}  className="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                            <div className="form-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" for="customFile">Upload image</label>
                                </div>
                            </div>
                            <div className="py-4"></div>
                        </div>
                    </div>
                    <div className="btn-toolbar justify-content-between">
                        <div className="btn-group">
                            <button type="submit" onClick={Share} className="btn-light action-button btn share">share</button>
                        </div>
                        <div className="btn-group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-globe"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="/"><i className="fa fa-globe"></i> Public</a>
                                <a className="dropdown-item" href="/"><i className="fa fa-users"></i> Friends</a>
                                <a className="dropdown-item" href="/"><i className="fa fa-user"></i> Just me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Share
