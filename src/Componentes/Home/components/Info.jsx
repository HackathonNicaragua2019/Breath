import React from 'react'
import {Link} from '@reach/router'
function Info(props) {
    return (
        <div className="col-md-3">
            <div className="card card-css">
                <div className="card-body">
                  <Link to={`/profile/${props.id}`} >  <div className="h5">{props.userName}</div></Link>
                    <div className="h7 color_t">{props.fullName}</div>
                    <div className="h7">{props.description}</div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="h6 color_t">Seguidores</div>
                        <div className="h5">{props.followers}</div>
                    </li>
                    <li className="list-group-item">
                        <div className="h6 color_t">Siguiendo</div>
                        <div className="h5">{props.following}</div>
                    </li>
                    <li className="list-group-item list-last color_t">{props.contact}</li>
                </ul>
            </div>
        </div>
    )
}

export default Info
