import React from "react";
import { Input } from "reactstrap";
import "../../assets/styles/atoms/inputTag.css";

export default function InputTag(props) {

    return (
        <div className="input-with-icon">
            <Input className="custom-input" type={props.type} placeholder={props.placeholder} />
            <div className="input-icon">
                {props.icon}
            </div>
        </div>
    )
}