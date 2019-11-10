import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'

const Form = () => {
    return (
        <form>
            <h6 class="heading-small text-muted mb-4">Informacion de Usuario</h6>
            <Form1
                userName="lucky.jesse"
                firstName="Lucky"
                lastName="Jesse"
            />
            <hr class="my-4" />

            <h6 class="heading-small text-muted mb-4">Informacion de contacto</h6>
            <Form2
                address="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                city="New York"
                country="United States"
            />
            <hr class="my-4" />

            <h6 class="heading-small text-muted mb-4">Sobre mi</h6>
            <Form3
                content = "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
            />
        </form>
    )
}

export default Form
