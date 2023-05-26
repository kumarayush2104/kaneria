import React from 'react'

export default function AboutSectionContent(props) {
    return (
        <div className={`tab-pane fade ${props.active}`}>
            <>{props.content}</>
        </div>
    )
}
