import React from "react";
import appStore from "../../assets/images/app-store.png";
import googlePlay from "../../assets/images/google-play.png";
import "../../assets/styles/landing/landing.css";

export default function DownloadBlock() {

    return (
        <div className="block-container mb-5">
            <div className="block-content text-center">
                <div className="d-flex justify-content-center">
                    <div className="company-name">
                        <p>YOUPHRATES</p>
                    </div>
                </div>
                <h2 className="block-title">
                    Download the App
                </h2>
                <p className="block-sub-title color-181818">
                    Get your first meal Free | Use promo code YUMMY10 $10 value, no minimum purchase required
                </p>
                <div className="download-actions-div mt-5 mb-5 d-flex align-items-center justify-content-center flex-wrap">
                    <div className="mx-1 mb-2">
                        <img src={googlePlay} className="google-play-img" alt="google play" />
                    </div>
                    <div className="mx-1 mb-2">
                        <img src={appStore} className="app-store-img" alt="app store" />
                    </div>
                </div>
            </div>
        </div>
    )
}