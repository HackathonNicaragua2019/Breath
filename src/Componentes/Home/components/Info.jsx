import React from 'react'

function Info(props) {
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <div className="h5">{props.userName}</div>
                    <div className="h7 text-muted">{props.fullName}</div>
                    <div className="h7">{props.description}</div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="h6 text-muted">Followers</div>
                        <div className="h5">{props.followers}</div>
                    </li>
                    <li className="list-group-item">
                        <div className="h6 text-muted">Following</div>
                        <div className="h5">{props.following}</div>
                    </li>
                    <li className="list-group-item">{props.contact}</li>
                </ul>
            </div>
        </div>
    )
}

export default Info
