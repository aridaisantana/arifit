import React from 'react'
import {MdDoneAll} from 'react-icons/md';
import image from '../images/pic2.jpg';
import {BiDumbbell} from "react-icons/bi";
import {FaDumbbell} from "react-icons/fa";
import {FcSportsMode} from "react-icons/fc";
import Footer from "./FooterComponent";


function HomeComponent({user, setUser}) {

        return (
            <>
                <div className="hero">
                    <div className="hero_content">
                        <h1>Arifit</h1>
                        <p>Únete a Arifit, cambia tu vida.</p>
                        <a href="#membership" className="button">Empieza Ahora</a>
                    </div>
                </div>
                <div className="services">
                    <div className="services_container row m-3">
                        <div className="col-md-6">
                            <p className="topline">Servicios</p>
                            <h1 className="services_heading">Qué ofrecemos</h1>
                            <div className="services_features">
                                <p className="services_feature"><MdDoneAll className="mddone"/>Asesoramiento Personalizado.</p>
                                <p className="services_feature"><MdDoneAll className="mddone"/>Dieta y consejos sobre nutrición.</p>
                                <p className="services_feature"><MdDoneAll className="mddone"/>Entrenamientos amenos y personalizados.</p>
                                <p className="services_feature"><MdDoneAll className="mddone"/>Trato cercano y ganas de ayudar.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={image} alt="gym" className="services_img" />
                        </div>
                    </div>
                </div>
                <div id="membership" className="membership">
                    <h1>Nuetros servicios</h1>
                    <p className="membership_desc">Empieza hoy y da un giro a tu vida.</p>
                    <div className="membership_wrapper">
                        <div className="membership_card">
                            <div className="membership_title">
                                <FcSportsMode className="card-icon"/>
                                <h3>Básico</h3>
                            </div>
                            <div className="membership_perks">
                                <p>Rutina de entrenamiento</p>
                                <p>Dieta personalizada</p>
                                <p>Consulta de dudas</p>
                                <p>15€ al mes</p>
                            </div>
                            <a href="/register/basic" className="button">Únete</a>
                        </div>
                        <div className="membership_card">
                            <div className="membership_title">
                                <BiDumbbell className="card-icon"/>
                                <h3>Pro</h3>
                            </div>
                            <div className="membership_perks">
                                <p>Rutina de entrenamiento</p>
                                <p>Dieta personalizada</p>
                                <p>Consulta de dudas</p>
                                <p>Chat privado con el entrenador</p>
                                <p>30€ al mes</p>

                            </div>
                            <a href="/register/pro" className="button">Únete</a>
                        </div>
                        <div className="membership_card">
                            <div className="membership_title">
                                <FaDumbbell className="card-icon"/>
                                <h3>Premium</h3>
                            </div>
                            <div className="membership_perks">
                                <p>Rutina de entrenamiento</p>
                                <p>Dieta personalizada</p>
                                <p>Consulta de dudas</p>
                                <p>Chat privado con el entrenador</p>
                                <p>45€ al mes</p>

                            </div>
                            <a href="/register/premium" className="button">Únete</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    
}

export default HomeComponent;
