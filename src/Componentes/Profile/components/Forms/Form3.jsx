import React from 'react'

const Form3 = (props) => {
    return (
        <div class="pl-lg-4">
            <div class="form-group focused">
                <label>About Me</label>
                <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ...">{props.content}</textarea>
            </div>
        </div>
    )
}

export default Form3
