import React from 'react'

const Msg_in = (props) => {
    return (
        <div class="incoming_msg">
            <div class="incoming_msg_img"> <img src={props.img} alt={props.img} /> </div>
            <div class="received_msg">
                <div class="received_withd_msg">
                    <p>{props.message}</p>
                    <span class="time_date"> {props.time}    |    {props.date}</span></div>
            </div>
        </div>
    )
}

export default Msg_in
