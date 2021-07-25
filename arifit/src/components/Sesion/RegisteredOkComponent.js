import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import LoginForm from './LoginFormComponent';

function RegisteredOkComponent({setUser}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    }
  
    const toggleLogin = () => {
      setIsLoginOpen(!isLoginOpen);
    }

    return (
        <div className="jumbotron text-center">
            <h1 className="display-3">¡Gracias por confiar en Arifit!</h1>
            <p className="lead"><a href="#" className="text-primary ml-2" onClick={() => toggleLogin()}><strong>Inicie sesión</strong></a> para comenzar a cambiar su vida.</p>
            <hr />
            <p>
            ¿Alguna duda? <a href="/aboutus">Contacta con nosotros</a>
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-sm" href="/home" role="button">Ir a la página principal</a>
            </p>
            <Modal className="text-primary" isOpen={isLoginOpen} toggle={toggleLogin}>
                    <ModalHeader toggle={toggleLogin} cssModule={{'modal-title': 'w-100 text-center'}}>Iniciar sesión</ModalHeader>
                    <ModalBody>
                      <LoginForm setUser={setUser} setIsModalOpen={setIsLoginOpen} isModalOpen={isLoginOpen}/>
                    </ModalBody>
            </Modal>
        </div>
        
    )
}

export default RegisteredOkComponent
