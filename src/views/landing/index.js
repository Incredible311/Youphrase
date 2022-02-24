import React from 'react';
import ButtonTag from "../../components/atoms/ButtonTag";
import BigCarousel from '../../components/landing/BigCarousel';
import FeatureBlock from '../../components/landing/featureBlock';
import WelcomeBlock from '../../components/landing/welcomeBlock';
import FamousBlock from '../../components/landing/famousBlock';
import SearchFoodBlock from '../../components/landing/searchFoodBlock';
import ChefBlock from '../../components/landing/chefBlock';
import GalleryBlock from '../../components/landing/galleryBlock';
import ReviewBlock from '../../components/landing/reviewBlock';
import RecipeShareBlock from '../../components/landing/recipeShareBlock';
import DownloadBlock from '../../components/landing/downloadBlock';
import { Phone } from "react-feather";
import ScrollAnimation from "react-animate-on-scroll";
import dish1 from "../../assets/images/dish1.png";
import "../../assets/styles/landing/landing.css";

export default function Landing() {

    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="big-carousel-contaniner">
                    <BigCarousel />
                    <div className="call-us-details-div">
                        <div className="call-us-details-left">
                            <h3><span>Call</span> Us For Details</h3>
                            <p>We are offering a platform for passionate food serving professionals to build businesses foundation.</p>
                            <div><ButtonTag icon={<Phone size={18} />} title={"+000-123-8975"} onClick={() => console.log("call us")} /></div>
                        </div>
                        <div className="call-us-details-right">
                            <img src={dish1} alt="dish" />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <FeatureBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <WelcomeBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <FamousBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <SearchFoodBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <ChefBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <GalleryBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <ReviewBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <RecipeShareBlock />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <DownloadBlock />
            </ScrollAnimation>
        </div>
    )
}