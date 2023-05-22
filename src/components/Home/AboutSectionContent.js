import React from 'react'

export default function AboutSectionContent(props) {
    return (
        <div className={`tab-pane fade show ${props.active}`} id={props.tabName} role="tabpanel">
            <p>{props.content}</p>
            <a className="blue-btn" href="#!">{props.buttonTitle}</a>
        </div>
    )
}
