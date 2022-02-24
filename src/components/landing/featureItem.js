import React from 'react';
import "../../assets/styles/landing/featureItem.css";

export default function FeatureItem(props) {

    return (
        <div className="feature-item">
            {props.icon}
            <p className="feature-item-title">{props.title}</p>
        </div>
    )
}