import React from "react";
import { Row, Col } from "reactstrap";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import "../../assets/styles/landing/landing.css";

export default function GalleryBlock() {

    return (
        <div className="block-container mb-5">
            <div className="block-content text-center">
                <div className="d-flex justify-content-center">
                    <div className="company-name">
                        <p>YOUPHRATES</p>
                    </div>
                </div>
                <h2 className="block-title">
                    Gallery of our food & cook
                </h2>
                <Row className="mt-5 mb-5">
                    <Col sm={12} md={12} lg={6} >
                        <div className="position-relative mb-4">
                            <img src={gallery1} alt="gallery" className="gallery-left-img" />
                            <div className="gallyer-img-action d-flex justify-content-between">
                                <p>Cooking may be something fun</p>
                                <ArrowRight />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Row className="mb-4">
                            <Col lg={12}>
                                <img src={gallery2} alt="gallery" className="gallery-left-img" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={6} lg={6}>
                                <img src={gallery3} alt="gallery" className="gallery-left-img" />
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <img src={gallery4} alt="gallery" className="gallery-left-img" />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
        </div>
    )
}