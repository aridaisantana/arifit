import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import LoginForm from "./LoginFormComponent";


function Header ({token, setToken}){

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    
    if(!token){
        return(
            <>
                
                <Navbar style={{backgroundColor: '#f1f1f1'}} expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>   
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="text-primary"></span> Home
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <button className="blue" onClick={toggleModal} >
                                    Iniciar sesión
                                </button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                
                <Modal className="text-primary" isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>Iniciar sesión</ModalHeader>
                    <ModalBody>
                      <LoginForm setToken={setToken} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                    </ModalBody>
                </Modal>
            </>
        );
    }else{
        return(
            <>
                <Navbar style={{backgroundColor: '#f1f1f1'}} expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>   
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="text-primary"></span> Home
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <button className="blue" onClick={() => setToken(null)}>
                                    <span className="fa fa-sign-in fa-lg"></span>Cerrar sesión
                                </button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>

                <Modal className="text-primary" isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>Cerrar sesión</ModalHeader>
                    <ModalBody>
                      <LoginForm setToken={setToken} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                    </ModalBody>
                </Modal>
            </>
        );
    }
    

    
            
            
     
}


export default Header;