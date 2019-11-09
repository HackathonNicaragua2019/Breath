import React from 'react'
import Form from './Forms/Form'

const MyAccount = () => {
    return (
        <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">

                {/* My Account y settings */}
                <div class="card-header bg-white border-0">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">My account</h3>
                        </div>
                        <div class="col-4 text-right">
                            <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    <Form/>
                </div>

            </div>
        </div>
    )
}

export default MyAccount
