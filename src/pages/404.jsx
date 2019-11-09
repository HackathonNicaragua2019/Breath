import React from 'react'
import './style.css'
import { Link } from '@reach/router'
import NotFoundImg from './404.png'

const NotFound = () => (
    <div className="text-center">
        <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
        
        <div className="info">
        <h1 className="text-error er">ERROR !</h1>
        <h4 className="text-nf">PAGE NOT FOUND</h4>

        <p>The page you were looking for doesn't exist or was removed.
            <br/>Try to go Home.
        </p>

        <Link to="/">
            <button className="btn btn-primary">HOME PAGE</button>
        </Link>
        </div>
    </div>
)

export default NotFound