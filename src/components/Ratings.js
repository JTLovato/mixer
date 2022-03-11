import React from 'react'

function Ratings(props) {

    let stars = props.stars

    return (
        <div className="ratings-bar drink-card-ratings">
            <span>
                <i
                className={
                    stars >= 2
                    ? 'fa fa-star fa-2x'
                    : stars >= 1
                    ? 'fa fa-star-half-o fa-2x'
                    : 'fa fa-star-o fa-2x'
                }
                ></i>
            </span>
            <span>
                <i
                className={
                    stars >= 4
                    ? 'fa fa-star fa-2x'
                    : stars >= 3
                    ? 'fa fa-star-half-o fa-2x'
                    : 'fa fa-star-o fa-2x'
                }
                ></i>
            </span>
            <span>
                <i
                className={
                    stars >= 6
                    ? 'fa fa-star fa-2x'
                    : stars >= 5
                    ? 'fa fa-star-half-o fa-2x'
                    : 'fa fa-star-o fa-2x'
                }
                ></i>
            </span>
            <span>
                <i
                className={
                    stars >= 8
                    ? 'fa fa-star fa-2x'
                    : stars >= 7
                    ? 'fa fa-star-half-o fa-2x'
                    : 'fa fa-star-o fa-2x'
                }
                ></i>
            </span>
            <span>
                <i
                className={
                    stars >= 10
                    ? 'fa fa-star fa-2x'
                    : stars >= 9
                    ? 'fa fa-star-half-o fa-2x'
                    : 'fa fa-star-o fa-2x'
                }
                ></i>
            </span>
        </div>
    )
}

export default Ratings
