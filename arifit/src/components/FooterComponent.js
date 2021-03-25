import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">          
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon" href="mailto:aridaitecnologia@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-2 footer">             
                    <div className="col-12 text-center">
                        <p style={{color:"#106aec"}}>Developed and designed by Aridai Santana. ©2021.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;