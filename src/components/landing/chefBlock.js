import React from "react";
import { Row, Col } from "reactstrap";
import chefAvatar from "../../assets/images/chef-avatar.png";
import chefSign from "../../assets/images/chef-sign.png";

export default function ChefBlock() {

    return (
        <div className="block-container mb-5">
            <div className="block-content text-left">

                <Row className="mt-5 mb-5">
                    <Col sm={12} md={12} lg={6} className="d-flex justify-content-center align-items-center">
                        <div className="text-center"><img src={chefAvatar} alt="chef" className="chef-avatar-img mb-3" /></div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="">
                            <div className="company-name">
                                <p>person behind the delicious food</p>
                            </div>
                        </div>
                        <h2 className="block-title">
                            meet youphrates chefs
                        </h2>
                        <p className="block-sub-title color-181818">
                            Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                        </p>
                        <p className="block-sub-title2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce eu orci varius, ultricies neque a, sagittis neque. 
                            Fusce tristique bibendum condimentum. Sed commodo urna eu vehicula luctus. 
                            Duis ligula lacus, malesuada vitae felis sed, vehicula vulputate augue.
                        </p>
                        <p className="block-sub-title2">
                            Curabitur non massa ultrices, porta tortor vitae, dignissim arcu. 
                            Nunc ante odio, vestibulum ac urna non, cursus posuere nisi. 
                            Integer dapibus, massa et porta venenatis, elit mi viverra nulla, in scelerisque neque erat vitae mauris. 
                            Vestibulum at vestibulum tortor.
                        </p>
                        <div>
                            <img src={chefSign} alt="chef sign" />
                            <p className="chef-name">Chef Jhon Doe</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}