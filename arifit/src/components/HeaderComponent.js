import { useState, Fragment } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import LoginForm from "./LoginFormComponent";
import {FaRegUserCircle} from 'react-icons/fa';

function Header ({user, setUser}){

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
        
    if(!user){
        return(
            <>
                
                <Navbar color="light" light expand="sm">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar style={{textAlign: 'center', justifyContent: 'space-between'}}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="text-primary">Home</span> 
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <hr />
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
                      <LoginForm setUser={setUser} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                    </ModalBody>
                </Modal>
            </>
        );
    }else {
        
        const userAccount = user.usuario.rol;
        
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
                                <button className="blue" onClick={() => {
                                    setUser(null);
                                    localStorage.clear();
                                }}>
                                    <span className="fa fa-sign-in fa-lg"></span>Cerrar sesión
                                </button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Link to={`/service/${userAccount.toLowerCase()}`}><FaRegUserCircle style={{height:"50px", width:"50px", marginLeft:"20px"}}/></Link>
                </div>
                </Navbar>
                <Modal className="text-primary" isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>Cerrar sesión</ModalHeader>
                    <ModalBody>
                      <LoginForm setUser={setUser} setIsModalOpen={setIsModalOpen}/>
                    </ModalBody>
                </Modal>
            </>
        );
    }
    

    
            
            
     
}


export default Header;