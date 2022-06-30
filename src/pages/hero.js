import React from "react";
import {Col, Form, Row} from "react-bootstrap";

function Hero() {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero-info">
                    <Row>
                        <Col lg={6}><h1>LOGISTICS FREIGHT SERVICES</h1>
                            <p>Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis
                                sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum
                                maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username"
                                       aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img className="illustration" src={require('../assets/Truck 04.jpg')} alt="" />
                        </Col>
                    </Row>
                    <div className="hero-message">
                        <div id="abs1">
                            <i className='bx bx-support'></i><br/>
                                <b>24/7 Support</b>
                                <br />Lorem ipsum dolor sit amet
                                <br />Lorem ipsum dolor sit amet
                                <br />Perspiciatis ipsum odio minima
                                <br />tempora animi iure.
                        </div>
                        <div id="abs2">
                            <b>GET  FREE QUOTE</b><br/>
                            <Form>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Your Name" name="name"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Your Email" name="email"/>
                                </div>
                                <button type="button" className="btn btn-primary">Get Quote</button>
                            </Form>

                        </div>
                        <div id="abs3">
                            <i className='bx bx-world'></i><br/>
                            <b>Worldwide Service</b>
                            <br />Lorem ipsum dolor sit amet
                            <br />Lorem ipsum dolor sit amet
                            <br />Perspiciatis ipsum odio minima
                            <br />tempora animi iure.
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Hero;
