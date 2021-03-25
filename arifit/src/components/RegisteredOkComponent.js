import React from 'react'

function RegisteredOkComponent() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-3">¡Gracias por confiar en Arifit!</h1>
            <p className="lead"><strong>Inicie sesión</strong> para comenzar a cambiar su vida.</p>
            <hr />
            <p>
            ¿Alguna duda? <a href="">Contacta con nosotros</a>
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-sm" href="/home" role="button">Ir a la página principal</a>
            </p>
        </div>
    )
}

export default RegisteredOkComponent
