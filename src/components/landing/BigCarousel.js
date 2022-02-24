import React, { useState, useCallback, useMemo } from 'react';
import {
    Carousel,
    CarouselItem
} from 'reactstrap';
import { ChevronsLeft, ChevronsRight, Circle } from "react-feather";
import ButtonTag from '../atoms/ButtonTag';
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/meat-back.png";
import cooker from "../../assets/images/cooker-img.png";
import "../../assets/styles/landing/bigCarousel.css";

const items = [
    {
        src: slider1,
        altText: 'Slide 1'
    },
    {
        src: slider2,
        altText: 'Slide 1'
    }
];

export default function BigCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    const next = useCallback(() => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex)
    }, [setActiveIndex, activeIndex])

    const previous = useCallback(() => {
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex)
    }, [setActiveIndex, activeIndex])

    const goToIndex = useCallback((index) => {
        setActiveIndex(index)
    }, [setActiveIndex])

    const slides = useMemo(() => {
        return items.map((item, id) => {
            return (
                <CarouselItem
                    // onExiting={this.onExiting}
                    // onExited={this.onExited}
                    key={id}
                    className="big-carousel-item"
                >
                    <div className="big-carousel-item-img-div position-relative">
                        <div
                            className="big-carousel-item-img"
                            style={{ background: `linear-gradient(0deg, rgba(200, 200, 200, 0.58), rgba(200, 200, 200, 0.58)), url(${item.src})` }} />
                        <div className="big-carousel-item-content">
                            <div className="company-title">
                                YOUPHRATES
                            </div>
                            <h2 className="mt-4">ORDER <span>HOME-</span></h2>
                            <h2><span>COOKED FOOD</span> FROM</h2>
                            <h2>LOCAL CHEFS!</h2>
                            <p>We are offering a platform for passionate food serving professionals to build businesses foundation.</p>
                            <ButtonTag title="ORDER NOW" onClick={() => console.log("order now")} />
                        </div>
                    </div>
                </CarouselItem>
            );
        });
    }, [])

    const carouselIndicators = useMemo(() => {
        return items.map((item, id) => {
            return activeIndex === id ?
                <Circle size={16} color={"#3CC754"} className="mx-1 cursor-pointer" /> :
                <Circle size={10} color={"#828282"} onClick={() => goToIndex(id)} className="mx-1 cursor-pointer" />
        })
    }, [activeIndex, goToIndex])

    return (
        <div className="big-carousel-container">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                {slides}
                <div className="big-carousel-item-cooker-img">
                    <img src={cooker} alt="cooker" />
                </div>
            </Carousel>
            <div className="big-carousel-indicator d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    {carouselIndicators}
                </div>
                <div className="mx-1 cursor-pointer">
                    <ChevronsLeft onClickHandler={previous} color={"#6A6969"} onClick={previous} />
                    <ChevronsRight onClickHandler={next} color={"#6A6969"} onClick={next} />
                </div>
            </div>

        </div>
    )
}