import React from 'react'

export default function ProductDescriptionCard(props) {
    return (
        <>
            <h5 className="sub-title">{props.title}</h5>
            <p>{props.content}</p>
        </>
    )
}
