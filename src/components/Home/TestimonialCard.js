import React from 'react'

export default function TestmonialCard(props) {
    return (
        <div className="client-item">
            <i className="flaticon-right-quote"></i>
            <div className="client-top">
                <img src={props.image} alt="Client" />
                <h3>{props.name}</h3>
                <span>{props.designation}</span>
            </div>
            <p>{props.message}</p>
        </div>
    )
}
