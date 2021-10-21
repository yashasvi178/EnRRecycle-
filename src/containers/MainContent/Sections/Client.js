import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Client extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-gray" id="client">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-account-circle"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Our Client</h3>
                                    <p className="section-subtitle pt-3 text-muted"> Clients from all over the world have used our products and have partnerd with EnR. Look at what they say about us.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>I am very happy with EnR services, and I will work them for a very long time.Their work is quick and efficient and doesn't dissapoint.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/image-1.png" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span> EnR always stay behind the scene, do all our grunt work and send us all the questions. We send the answers back, they complete the job.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/image-2.png" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>EnR has always done quick and eficient work and I did'nt even need to pester them. My work was completed in the stipulated timeline.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/image-3.png" alt="" className="img-fluid rounded-circle d-block mx-auto" />
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

export default Client;   