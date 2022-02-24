import React, { useMemo } from "react";
import Carousel from 'react-multi-carousel';
import FamouseCard from "./famousCard";
import food1 from "../../assets/images/food1.png";
import food2 from "../../assets/images/food2.png";
import food3 from "../../assets/images/food3.png";
import food4 from "../../assets/images/food4.png";
import 'react-multi-carousel/lib/styles.css';
import "../../assets/styles/landing/landing.css";
import "../../assets/styles/landing/famousBlock.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2224 },
        items: 5
    },
    desktop1: {
        breakpoint: { max: 2224, min: 1794 },
        items: 4
    },
    desktop2: {
        breakpoint: { max: 1794, min: 1394 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1394, min: 864 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const items = [
    {
        icon: <img src={food1} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food2} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food3} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food4} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food1} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food2} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food3} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    },
    {
        icon: <img src={food4} alt="food" />,
        title: "Cooking may be something fun",
        description: "Cooking may be something fun because this activity",
        price: 20
    }
]

export default function FamousBlock() {

    const slides = useMemo(() => {
        return items.map((item, id) => {
            return <FamouseCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                price={item.price}
            />
        })
    }, [])

    return (
        <div className="block-container mb-5">
            <div className="block-content text-center">
                <div className="d-flex justify-content-center">
                    <div className="company-name">
                        <p>YOUPHRATES</p>
                    </div>
                </div>
                <h2 className="block-title">
                    Some of our famous Dishe’s
                </h2>
                <p className="block-sub-title color-787676">
                    Cooking may be something fun because this activity can train one’s thinking skills and increease one creativity
                </p>
                <div className="mb-5 mt-5">
                    <Carousel
                        containerClass="famouse-carouel-container"
                        itemClass="famouse-carousel-item"
                        responsive={responsive}
                    >
                        {slides}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}