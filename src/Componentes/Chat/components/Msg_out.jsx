import React from 'react'

const Msg_out = (props) => {
    return (
        <div class="outgoing_msg">
              <div class="sent_msg">
                <p>{props.message}</p>
                <span class="time_date"> {props.time}    |    {props.date}</span> </div>
            </div>
    )
}

export default Msg_out