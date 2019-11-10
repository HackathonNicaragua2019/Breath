import React from 'react'

const Form1 = (props) => {
    return (
        // < !--Form1 -- >
        <div class="pl-lg-4">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Nombre de Usuario</label>
                        <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value={props.userName} />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <label class="form-control-label" for="input-email">Dirección de correo</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="jesse@example.com" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name">Primer nombre</label>
                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value={props.firstName} />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group focused">
                        <label class="form-control-label" for="input-last-name">Apellido</label>
                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value={props.lastName} />
                    </div>
                </div>
            </div>
        </div>                         
    )
}

export default Form1
