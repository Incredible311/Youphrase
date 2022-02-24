import React from "react";
import FeatureItem from '../../components/landing/featureItem';
import { ReactComponent as Variation } from "../../assets/images/variation.svg";
import { ReactComponent as Cooking } from "../../assets/images/cooking.svg";
import { ReactComponent as Chef } from "../../assets/images/chef.svg";
import { ReactComponent as Fun } from "../../assets/images/fun.svg";
import { Row, Col } from "reactstrap";
import "../../assets/styles/landing/landing.css";

export default function FeatureBlock() {

    return (
        <div className="block-container mb-5">
            <div className="block-content text-center">
                <div className="d-flex justify-content-center">
                    <div className="company-name">
                        <p>YOUPHRATES</p>
                    </div>
                </div>
                <h2 className="block-title">
                    Get a many of interesting features
                </h2>
                <p className="block-sub-title color-787676">
                    Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                </p>
                <Row className="mt-5 mb-5">
                    <Col sm={12} md={6} lg={3}>
                        <FeatureItem icon={<Variation />} title={"Menu Variations"} />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <FeatureItem icon={<Cooking />} title={"Cooking Ware"} />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <FeatureItem icon={<Chef />} title={"Best Chef"} />
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <FeatureItem icon={<Fun />} title={"It's Fun"} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}