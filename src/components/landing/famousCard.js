import React from "react";
import "../../assets/styles/landing/famousCard.css";
import ButtonTag from "../atoms/ButtonTag";

export default function FamouseCard(props) {

    return (
        <div className="famous-card">
            <div className="famous-card-icon">{props.icon}</div>
            <p className="famous-card-title">{props.title}</p>
            <p className="famous-card-description">{props.description}</p>
            <p className="famous-card-price">${props.price}</p>
            <div className="d-flex justify-content-center"><ButtonTag title="ORDER NOW" onClick={() => console.log("order now")} /></div>
        </div>
    )
}