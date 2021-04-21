import { useState, Fragment } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import LoginForm from "./LoginFormComponent";
import {FaRegUserCircle} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';

function Header ({user, setUser}){

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    console.log(user);
    
    const renderUnloggedNav = () => {
        return(
            <>
                
                <Navbar style={{backgroundColor: '#f1f1f1'}} light expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} className="blue"/>
                    <Collapse isOpen={isNavOpen} navbar style={{textAlign: 'center', justifyContent: 'space-between', alignItems: "center"}} >   
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:"#4C8FFB"}} to="/home">
                                    <AiOutlineHome style={{height:"30px", width:"30px", marginRight:"5px"}} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                 <NavLink className="nav-link" style={{color:"#4C8FFB"}} to="/aboutus">
                                    Sobre nosotros
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <hr />
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <button className="blue" onClick={() => toggleModal()}>
                                    <span className="fa fa-sign-in fa-lg"></span>Iniciar sesión
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
    }

    const renderLoggedNav = () => {
        const userAccount = user.usuario.rol;
        
        return(
            <>
                <Navbar style={{backgroundColor: '#f1f1f1'}} light expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} className="blue"/>
                    <Collapse isOpen={isNavOpen} navbar style={{textAlign: 'center', justifyContent: 'space-between', alignItems: "center"}}>   
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" style={{color:"#4C8FFB"}} to="/home">
                                    <AiOutlineHome style={{height:"30px", width:"30px", marginRight:"5px"}} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                 <NavLink className="nav-link" style={{color:"#4C8FFB"}} to="/aboutus">
                                    Sobre nosotros
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <hr />
                        <Nav className="ml-auto mr-2" navbar>
                            <NavItem>
                                <button className="blue" onClick={() => {
                                    setUser(null);
                                    localStorage.clear();
                                }}>
                                    <span className="fa fa-sign-in fa-lg"></span>Cerrar sesión
                                </button>
                            </NavItem>
                        </Nav>
                        <Link to={`/service/${userAccount.toLowerCase()}`}><FaRegUserCircle style={{height:"40px", width:"40px", marginTop:"5px"}}/></Link>
                    </Collapse>
                   
                </div>
                </Navbar>
            </>
        );
    }
         
    return(
        <div>
        {
            user
                ? renderLoggedNav()
                :  renderUnloggedNav()
        }
        </div>
    );
    

    
            
            
     
}


export default Header;