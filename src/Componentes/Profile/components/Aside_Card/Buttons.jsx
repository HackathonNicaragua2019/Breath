import React from 'react'

const Buttons = () => {
    return (
        <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between">
                <a href="/profile" className="btn btn-sm btn-info mr-4">Connect</a>
                <a href="/profile" className="btn btn-sm btn-default float-right">Message</a>
            </div>
        </div>
    )
}

export default Buttons
