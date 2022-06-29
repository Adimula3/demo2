import React from "react";
import {Col, Row} from "react-bootstrap";

function About() {

    return (
        <div className="about">
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <h1>About us</h1>
                        <p> Dolor iure expedita id fuga asperiores qui sunt consequatur minima.
                            Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores.
                            Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                        </p>
                        <ul>
                            <li>Ullamco laboris nisi ut aliquip consequat</li>
                          <span>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</span>
                            <li>Magnam soluta odio exercitationem reprehenderi</li>
                            <span>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</span>
                            <li>Voluptatem et qui exercitationem</li>
                            <span>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</span>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <img className="img_about" src={require('../assets/about.jpg')} alt=""/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default About;
