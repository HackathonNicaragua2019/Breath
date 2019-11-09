import React from 'react'

const ChatInfo = (props) => {
    return (
        <div className="chat_list">
            <div className="chat_people">
                <div className="chat_img"> <img src={props.img} alt={props.img} /> </div>
                <div className="chat_ib">
                    <h5>{props.userName} <span className="chat_date">{props.time}</span></h5>
                    <p>{props.shortMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatInfo
