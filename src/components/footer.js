import React from "react";
import logo from "../assets/images/logo2.png";
import { Row, Col } from "reactstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "react-feather";
import cooker from "../assets/images/footer-cooker.png";
import dishes from "../assets/images/footer-dishes.png";
import "../assets/styles/footer.css";

export default function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-content">
                <Row>
                    <Col sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
                        <div className="footer-logo-div">
                            <div>
                                <img src={logo} alt="footer logo" className="footer-logo-img" />
                            </div>
                            <p className="footer-address-text">4200 Hamill Avenue, San Diego, California 92109.</p>
                            <div className="d-flex align-items-center social-links">
                                <div className="footer-social-icon"><Facebook size={20}/></div>
                                <div className="footer-social-icon"><Twitter size={20} /></div>
                                <div className="footer-social-icon"><Instagram size={20}/></div>
                                <div className="footer-social-icon"><Linkedin  size={20}/></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
                        <div className="footer-content-div">
                            <h4 className="footer-content-title">COMPANY</h4>
                            <p className="footer-content-item">About Us</p>
                            <p className="footer-content-item">We Are Hiring</p>
                            <p className="footer-content-item">Affliate Program</p>
                            <p className="footer-content-item">Business Accounts</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
                        <div className="footer-content-div">
                            <h4 className="footer-content-title">HELP</h4>
                            <p className="footer-content-item">Email Us</p>
                            <p className="footer-content-item">Help & FAQ</p>
                            <p className="footer-content-item">Make A Return</p>
                            <p className="footer-content-item">Shipping Policy</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
                        <div className="footer-content-div">
                            <h4 className="footer-content-title">Quick links</h4>
                            <p className="footer-content-item">terms & conditions</p>
                            <p className="footer-content-item">privacy policy</p>
                            <p className="footer-content-item">Affliates</p>
                            <p className="footer-content-item">return policy</p>
                        </div>
                    </Col>
                </Row>
                <hr />
                <p className="footer-bottom-text">Copyright © youphrates.com 2021. All Rights Reserved.</p>
            </div>
            <img src={dishes} className="footer-dishes-img" alt="dishes" />
            <img src={cooker} className="footer-cooker-img" alt="cooker" />
        </div>
    )
}