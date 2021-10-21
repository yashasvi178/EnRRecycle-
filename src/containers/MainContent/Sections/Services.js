import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-all-inclusive text-custom"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Steps to Recycle</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cube-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>CREATE A LOGIN</h5>
                                        <p className="pt-2 text-muted">Consumers scan a code that takes them to a page with a product overview which includes a product photo, name, and description.Go to create a login add you're details and you are all set to start the recycling!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-headset text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>BUY A SODA!</h5>
                                        <p className="pt-2 text-muted">The soda can has a QR code which on scanning will take you to a page which with a product overview which includes a product photo, name, and description.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-monitor text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>INSPIRE, EDUCATE, ENGAGE</h5>
                                        <p className="pt-2 text-muted">Tell people about this product and educate them about the uses of this product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cloud-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>SCAN THE QR CODE ON CAN</h5>
                                        <p className="pt-2 text-muted">The soda can has a QR code which on scanning will take you to a page which with a product overview which includes a product photo, name, and description.You can recycle this can and get money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cellphone-android text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>SCAN QR CODE ON BIN</h5>
                                        <p className="pt-2 text-muted">The bin has a QR code which on scanning will take you to a page which   shows the location of the bin where you would be putting it for recycling.You would also be able to see the product you are recycling</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-eyedropper text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>GET DEPOSIT AND REWARDS</h5>
                                        <p className="pt-2 text-muted">Now you can buy another soda with the reward you got from the previous can! Recycle and reap the benefits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           </AUX>
        );
    }
}

export default Services;   