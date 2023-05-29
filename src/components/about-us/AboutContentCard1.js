import React from 'react'

export default function AboutContentCard1(props) {
    return (
        <div className={`row align-items-center mt-50 ${props.alter? "flex-row-reverse" : null}`}>
            <div className="col-md-6 text-center">
                <div className="img_effect_w">
                   <img className="img_effect" src={props.image} alt="About Section" width={props.imageWidth} />
                </div>
            </div>
            <div className="col-md-6">
                {props.content}
            </div>
        </div>
    )
}
