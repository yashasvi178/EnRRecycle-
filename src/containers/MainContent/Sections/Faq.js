import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Faq extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-comment-question-outline"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Frequently Asked Questions</h3>
                                    <p className="section-subtitle pt-3 text-muted">Here we answer your doubts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6 faq-side"> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> What are the key benefits?</h3>
                                        <p className="faq-sub-title text-muted pt-2">1. Transforming consumer behaviour around recycling – the app incentivises and rewards consumers for recycling, whilst having the ability to engage and provide clarity over recycling

2. Bringing incremental economic value through the recycled and re-used items – a true circular economy

3. Immutable, secure and auditable – tracking packaging end to end</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1 mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> What are Deposit Return Schemes?</h3>
                                        <p className="faq-sub-title text-muted pt-2">Deposit return schemes (DRS) are becoming more and more common all around the world. When you purchase a drink in a plastic bottle (in some cases glass) you’ll be charged a small deposit at point of purchase. When you return the bottle for recycling, you will receive your deposit back.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> What are unique codes?</h3>
                                        <p className="faq-sub-title text-muted pt-2">EnR uses unique codes which are placed on each individual item (either on the physical product or a receipt).

Digitisation is without doubt the future of a true circular economy, allowing for traceability of waste, immutability, flexibility, rich insights and data – for cradle to grave accountability.

We are code agnostic – we can either create the unique codes for you, or work with your unique codes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 faq-side "> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Why blockchain?</h3>
                                        <p className="faq-sub-title text-muted pt-2">We believe that Blockchain technology has the potential to transform recycling behaviour. Blockchain provides a digital ledger that is a continuously growing distributed database and cryptographically secured. Blockchain offers immutability, security and is fraud proof. However, we believe in green blockchain – so that it has a low carbon footprint.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i>What is an RVM?</h3>
                                        <p className="faq-sub-title text-muted pt-2">A reverse vending machine (RVM) uses technology to identify, collect and process used beverage containers for reuse or recycling.

Using the example of a standard vending machine, you insert money and receive a drink or other item in return for your money. When using a reverse vending machine, you insert an empty drinks bottle and receive money in return for recycling.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> When can be used?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens.</p>
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

export default Faq;   