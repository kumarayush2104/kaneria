import React from 'react'

export default function ProductFeatureCard(props) {
    return (
        <div className="col-lg-6">
            <div className="Benefit">
                <i><img src={props.image} alt='Benefit' /></i>
                <span>{props.content}</span>
            </div>
        </div>
    )
}
