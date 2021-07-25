import React, { useState } from "react";
import {AiOutlineUser, AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import Payment from './PaymentComponent';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {useParams} from 'react-router-dom';
import LoginForm from './LoginFormComponent';
import image from "../../images/register.svg";


export default function Register({setUser}) {

  
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  }

  const {rol} = useParams();

  const handleSubmit = async e => {
      e.preventDefault();
      
      toggleModal();
      
  }
  
  return (
    <>
        <div className="container">
            <div className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src={image} alt="Registro" className="img-fluid mb-3 d-none d-md-block" />
                    <h1>Crear una cuenta</h1>
                    <p className="font-italic text-muted mb-0"></p>
                    <p className="font-italic text-muted">Gracias por confiar en nosotros.</p>
                </div>

                <div className="col-md-7 col-lg-6 ml-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <AiOutlineUser />
                                    </span>
                                </div>
                                <input id="name" type="text" name="name" placeholder="Nombre"  required className="form-control bg-white border-left-0 border-md" onChange={(e) => {
                                    setNombre(e.target.value);
                                }}/>
                            </div>

                         

                            <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <AiOutlineMail />
                                    </span>
                                </div>
                                <input id="email" type="email" name="email" placeholder="Email" required className="form-control bg-white border-left-0 border-md" onChange={(e) => {
                                    setEmail(e.target.value);
                                }}/>
                            </div>

                           

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                         <RiLockPasswordLine />
                                    </span>
                                </div>
                                <input id="password" type="password" name="password" required placeholder="Contraseña" className="form-control bg-white border-left-0 border-md" onChange={(e) =>{
                                    setPassword(e.target.value);
                                }}/>
                            </div>

                            <div className="input-group col-lg-6 mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <RiLockPasswordLine />
                                    </span>
                                </div>
                                <input id="passwordConfirmation" type="password" name="passwordConfirmation" required placeholder="Confirmar Contraseña" className="form-control bg-white border-left-0 border-md" onChange={(e) => {
                                    setMatchPassword(e.target.value);
                                }}/>
                            </div>

                            <div className="form-group col-lg-12 mx-auto mb-0">
                                <input type="submit" className="btn btn-primary btn-block py-2 font-weight-bold" value="Crear cuenta"/>
                            </div>

                            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div className="border-bottom w-100 ml-5"></div>
                                <span className="px-2 small text-muted font-weight-bold text-muted">O</span>
                                <div className="border-bottom w-100 mr-5"></div>
                            </div>

                            <div className="text-center w-100">
                                <p className="text-muted font-weight-bold">¿Ya estás registrado?  <a href="#" className="text-primary ml-2" onClick={() => toggleLogin()}>Inicia sesión </a></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Modal className="text-primary" isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>Finalizar compra</ModalHeader>
                    <ModalBody>
                        <Payment nombre={nombre} email={email} password={password} rol={rol.toUpperCase()} toggleModal={toggleModal}/>
                    </ModalBody>
        </Modal>
        <Modal className="text-primary" isOpen={isLoginOpen} toggle={toggleLogin}>
                    <ModalHeader toggle={toggleLogin} cssModule={{'modal-title': 'w-100 text-center'}}>Iniciar sesión</ModalHeader>
                    <ModalBody>
                      <LoginForm setUser={setUser} setIsModalOpen={setIsLoginOpen} isModalOpen={isLoginOpen}/>
                    </ModalBody>
        </Modal>
    </>

  );
}
