import React from 'react'
import MsgIn from './Msg_in'
import MsgOut from './Msg_out'

const Mensajes = () => {
    return (
        <div class="mesgs">
            <div class="msg_history">
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="Test which is a new approach to have all solutions"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgOut
                    message="Test which is a new approach to have all solutions"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="Ok Everything it´s ok guys"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgOut
                    message="Apollo University, Delhi, India Test"
                    time="11:01 AM"
                    date="June 9"
                />
                <MsgIn
                    img="https://ptetutorials.com/images/user-profile.png"
                    message="We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford."
                    time="11:01 AM"
                    date="June 9"
                />
            </div>

            <div class="type_msg">
                <div class="input_msg_write">
                    <input type="text" class="write_msg" placeholder="Type a message" />
                    <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Mensajes
