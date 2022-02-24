import React from "react";
import { Row, Col, Input } from "reactstrap";
import { User, Mail, Phone, MapPin } from "react-feather";
import InputTag from "../atoms/InputTag";
import ButtonTag from "../atoms/ButtonTag";
import cooker from "../../assets/images/cooker.png";
import "../../assets/styles/landing/landing.css";

export default function RecipeShareBlock() {

    return (
        <div className="block-container mt-5 mb-5">
            <div className="block-content mt-5 mb-5">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="text-left">
                            <div className="company-name">
                                <p>YOUPHRATES</p>
                            </div>
                            <h2 className="block-title">
                                Get a many of interesting features
                            </h2>
                            <p className="block-sub-title color-181818">
                                Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                            </p>
                            <Row>
                                <Col md={12} lg={6}>
                                    <InputTag type="text" placeholder="First Name" icon={<User size={18} color={"#474646"} />} />
                                </Col>
                                <Col md={12} lg={6}>
                                    <InputTag type="text" placeholder="Last Name" icon={<User size={18} color={"#474646"} />} />
                                </Col>
                                <Col md={12} lg={12}>
                                    <InputTag type="email" placeholder="Email" icon={<Mail size={18} color={"#474646"} />} />
                                </Col>
                                <Col md={12} lg={6}>
                                    <InputTag type="phone" placeholder="Phone" icon={<Phone size={18} color={"#474646"} />} />
                                </Col>
                                <Col md={12} lg={6}>
                                    <InputTag type="text" placeholder="Location" icon={<MapPin size={18} color={"#474646"} />} />
                                </Col>
                            </Row>
                            <div className="recipe-share-btn">
                                <ButtonTag title="Get Started" onClick={() => console.log("get started")} />
                            </div>
                            <div className="mt-3 mb-3 d-flex align-items-center recipe-share-terms-checkbox">
                                <Input type="checkbox" />
                                <p className="mx-2 mb-0">
                                    *By submitting this form, you agree to our <a href="/">terms and conditions.</a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <img src={cooker} alt="cooker" className="recipe-cooker-img" />
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}