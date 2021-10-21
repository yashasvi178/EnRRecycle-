import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="title-icon">
                                <i className="mdi mdi-note-multiple-outline"></i>
                            </div>
                            <h3 className="section-title pt-5">Our Services</h3>
                            <p className="section-subtitle text-dark pt-3">We provide several services that will help you with your recycling process</p>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-1.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-eye text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>DIGITAL DRS</h5>
                                    <p className="pt-2">DIGITAL DRSAdvanced software has made it easier to get points over each item recycled just by scanning a QR code.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-chart-bubble text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>RE-USE</h5>
                                    <p className="pt-2">Helping transform your business by bringing a better consumer understanding and their desires for sustainable choices.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4">
                            <img src="images/service-2.png" alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-3.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-fingerprint text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>RECYCLE</h5>
                                    <p className="pt-2">The Deposit Return Scheme is a government-led initiative to reduce littering, where people pay a deposit on drinks containers and receive that deposit back when they return the container for recycling. </p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
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

export default Features;   