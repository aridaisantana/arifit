import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import image from "../images/aridai.jpeg";
import Footer from "./FooterComponent";


function About() {

        return(
            <>
            <div className="container">
                <div className="row">
                    <Breadcrumb style={{marginTop:"20px"}}>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Sobre nosotros</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Sobre nosotros</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Un poco de nuestra historia</h2>
                        <p>Somos un grupo de personas apasionadas por el fitness, entrenamiento y nutrición. Contamos con muchos años de experiencia en el sector y nos motiva ver la evolución positiva de nuestros clientes.</p>
                        <p>Nos comprometemos con nuestros clientes pero tambien esperamos que los clientes se comprometan con el programa pues, <em>No ofrecemos milagros</em>.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Algunos datos</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6"> 20 de enero de 2022</dd>
                                    <dt className="col-6">CEO</dt>
                                    <dd className="col-6">Aridai Santana Gil</dd>
                                    <dt className="col-6">Empleados</dt>
                                    <dd className="col-6">5</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card style={{marginTop:"20px"}}>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Lo único que se interpone entre ti y tu sueño, es la voluntad de intentarlo y la creencia de que en realidad es posible.</p>
                                    <footer className="blockquote-footer">Joel Brown</footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content mt-5">
                    <div className="col-12">
                        <h2 >Equipo Arifit</h2>
                    </div>
                    <div className="col-12">
                        <div  className="col-12 mt-5">
                            <Media tag="li">
                               <Media left middle>
                                   <Media style={{height:"200px", width:"200px"}} object src={image} alt="Aridai"></Media>
                               </Media>
                               <Media body className="ml-5">
                                   <Media heading>CEO</Media>
                                       <p>CEO de la empresa</p>
                                       <p>Soy el CEO, ingeniero informático y uno de los entrenadores de Arifit</p>
                               </Media>
                            </Media>
                        </div>
                        <div  className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media style={{height:"200px", width:"200px"}} object src={image} alt="Aridai"></Media>
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>Entrenador</Media>
                                    <p>Entrenador de fuerza</p>
                                    <p>Soy uno de los entrenadores del equipo Arifit</p>
                            </Media>
                        </Media>
                        </div>
                        <div  className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media  style={{height:"200px", width:"200px"}} object src={image} alt="Aridai"></Media>
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>Dietista</Media>
                                    <p>Dietista especializado</p>
                                    <p>Dietista del equipo Arifit</p>
                            </Media>
                        </Media>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        );
}

export default About;    