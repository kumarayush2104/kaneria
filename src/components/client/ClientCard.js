import React from 'react'

export default function ClientCard(props) {
    return (
        <div className="col-lg-2 ng-star-inserted">
            <div className="client-logo">
                <img alt="Logo" src={props.image} />
            </div>
        </div>
    )
}
