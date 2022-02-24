import React, { useMemo } from "react";
import { Star } from "react-feather";
import { Card, CardBody } from "reactstrap";
import { ReactComponent as Reply } from "../../assets/images/reply.svg";
import { ReactComponent as ThumbsUp } from "../../assets/images/thumbs-up.svg";
import "../../assets/styles/landing/reviewCard.css";

export default function ReviewCard(props) {

    const ratingMemo = useMemo(() => {
        const rating = []
        for (let i = 0; i < 5; i++) {
            i < props.data.rate ?
                rating.push(<Star size={18} className="mx-1 active-star" color={"#F8B404"} />) :
                rating.push(<Star size={18} className="mx-1" color={"#F8B404"} />)
        }
        return rating
    }, [props])

    return (
        <div className="p-2">
            <Card>
                <CardBody>
                    <div className="d-flex review-card">
                        <div>
                            <div className="review-author-first-char">{props.data.author.charAt(0)}</div>
                        </div>
                        <div className="d-grid">
                            <div>
                                <h4 className="mb-0 review-author-name">{props.data.author}</h4>
                                <p className="review-count">{props.data.review} Review</p>
                                <div className="d-flex align-items-center">
                                    <div className="mb-1">
                                        {ratingMemo}
                                    </div>
                                    <p className="mx-2 mb-0">{props.data.date}</p>
                                </div>
                                <p>{props.data.description}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <Reply />
                                    <p className="mb-0 mx-1">Reply</p>
                                </div>
                                <div className="d-flex align-items-center mx-3">
                                    <ThumbsUp />
                                    <p className="mb-0 mx-1">Like</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}