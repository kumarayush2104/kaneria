import React from 'react'

export default function ClientLogoCard(props) {
    return (
        <div className="logo-item">
            <img src={props.image} alt="Logo" />
        </div>
    )
}
