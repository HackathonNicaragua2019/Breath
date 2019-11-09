import React from 'react'

const Presentation = (props) => {
    return (
        //  Presentacion Say Hello Profile
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" >
            <span class="mask bg-gradient-default opacity-8"></span>

            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hello {props.fullName}</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <a href="#!" class="btn btn-info">Edit profile</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
