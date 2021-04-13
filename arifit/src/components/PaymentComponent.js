import React, {Fragment, useState} from 'react';
import GooglePayButton from "@google-pay/button-react";
import {Redirect} from 'react-router-dom';

async function registerUser(credentials) {
    return fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

function PaymentComponent({nombre, email, password, rol, toggleModal }) {
    
    const [redirect, setRedirect] = useState(false);
    const redirectToPage = () => setRedirect(true) ; 

    const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "BCR2DN6T37MKRWSF",
      merchantName: "Aridai"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "0.0",
      currencyCode: "EUR",
      countryCode: "ES"
    },
    shippingAddressRequired: true,
    callbackIntents: ['PAYMENT_AUTHORIZATION'],
    
  };

    const paymentSuccess = async e => {

        const register = await registerUser({
            nombre,
            email,
            password,
            rol
          });
        
        toggleModal();

        if(register.ok){
            console.log(register);
            redirectToPage();
        }
    }

   
    return (
        <>
            {redirect && (
                <Fragment>
                  <Redirect to='/registrocompleto' />  
                </Fragment>
            )} 
            <div className="text-center">
                <p className="font-italic text-muted">Nuestros pagos se median con Google play, una plataforma muy segura y comoda.</p>
                <GooglePayButton
                    environment="TEST"
                    buttonColor="black"
                    paymentRequest={paymentRequest}
                    onLoadPaymentData={paymentRequest => {
                        console.log("load payment data", paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log('Payment authorized success', paymentData);
                        paymentSuccess();
                        return { transactionState: 'SUCCESS' }
                    }}
                />
            </div>
            
        </>
    )
}

export default PaymentComponent
