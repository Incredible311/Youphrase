import React, { useMemo } from "react";
import Carousel from 'react-multi-carousel';
import ReviewCard from "./reviewCard";
import "../../assets/styles/landing/landing.css";
import "../../assets/styles/landing/famousBlock.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 2224 },
        items: 3
    },
    desktop1: {
        breakpoint: { max: 2224, min: 1794 },
        items: 2
    },
    desktop2: {
        breakpoint: { max: 1794, min: 1394 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1394, min: 864 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const items = [
    {
        author: "Jhon Doe",
        review: 1,
        rate: 5,
        date: "2 months ago",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique`,
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 3,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 4,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 5,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 2,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 5,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    },
    {
        author: "Jhon Doe",
        review: 1,
        rate: 5,
        date: "2 months ago",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu orci varius, ultricies neque a, sagittis neque. Fusce tristique",
    }
]

export default function ReviewBlock() {

    const slides = useMemo(() => {
        return items.map((item, id) => {
            return <ReviewCard data={item} key={id} />
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
                    Customer Review
                </h2>
                <div>
                    <Carousel
                        containerClass="review-carouel-container"
                        itemClass="review-carousel-item"
                        responsive={responsive}
                    >
                        {slides}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}