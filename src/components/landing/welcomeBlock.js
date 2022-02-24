import React from "react";
import dish2 from "../../assets/images/dish2.png";
import dish3 from "../../assets/images/dish3.png";
import womanChef from "../../assets/images/woman-chef.png";
import ButtonTag from "../../components/atoms/ButtonTag";
import { Row, Col } from "reactstrap";
import "../../assets/styles/landing/landing.css";

export default function WelcomeBlock() {

    return (
        <div className="block-container mb-5">
            <div className="block-content mb-5">
                <Row>
                    <Col sm={12} md={12} lg={5}>
                        <div className="welcome-content-left">
                            <img src={womanChef} className="welcome-content-main-img" alt="women chef" />
                            <img src={dish2} className="welcome-content-sub-img1" alt="dish" />
                            <img src={dish3} className="welcome-content-sub-img2" alt="dish" />
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={7}>
                        <div className="text-left">
                            <div className="company-name">
                                <p>YOUPHRATES</p>
                            </div>
                            <h2 className="block-title">
                                Welcome to youphrates
                            </h2>
                            <p className="block-sub-title color-181818">
                                Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                            </p>
                            <p className="block-sub-title2 color-181818">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce eu orci varius, ultricies neque a, sagittis neque.
                                Fusce tristique bibendum condimentum. Sed commodo urna eu vehicula luctus.
                                Duis ligula lacus, malesuada vitae felis sed, vehicula vulputate augue.
                            </p>
                            <p className="block-sub-title2 color-181818">
                                Curabitur non massa ultrices, porta tortor vitae, dignissim arcu.
                                Nunc ante odio, vestibulum ac urna non, cursus posuere nisi.
                                Integer dapibus, massa et porta venenatis, elit mi viverra nulla, in scelerisque neque erat vitae mauris.
                                Vestibulum at vestibulum tortor.
                            </p>
                            <ButtonTag title="CONTACT US" onClick={() => console.log("contact us")} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}