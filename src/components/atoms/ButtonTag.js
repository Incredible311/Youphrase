import React from "react";
import { Button } from "reactstrap";
import "../../assets/styles/atoms/buttonTag.css";

export default function ButtonTag(props) {

    return (
        <>
            <Button className="custom-button" onClick={() => props.onClick()}>{props.icon} {props.title}</Button>
        </>
    )
}