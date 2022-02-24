import React from "react";
import { Row, Col } from "reactstrap";
import SearchInputButton from "../atoms/SearchInputButton";
import meatThumb from "../../assets/images/meat-thumb.png"
import "../../assets/styles/landing/landing.css";

export default function SearchFoodBlock() {

    return (
        <div className="search-food-container position-relative mb-5">
            <div className="block-content position-relative">
                <Row className="search-food-content">
                    <Col sm={12} md={7} className="d-flex align-items-center">
                        <div className="text-left mb-5 mt-5">
                            <div className="company-name">
                                <p>YOUPHRATES</p>
                            </div>
                            <h2 className="block-title color-white">
                                Get a many of interesting features
                            </h2>
                            <p className="block-sub-title color-white">
                                Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                            </p>
                            <SearchInputButton />
                        </div>
                    </Col>
                    
                </Row>
                <img src={meatThumb} alt="meat" className="search-food-right-thumb" />
            </div>
        </div>
    )
}