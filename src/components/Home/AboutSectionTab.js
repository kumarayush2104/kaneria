import React from 'react'

export default function AboutSectionTab(props) {
    return (
        <li className="nav-item" role="presentation">
            <a className={`nav-link ${props.active}`} data-bs-toggle="pill" href={`#${props.reference}`} role="tab">{props.title}</a>
        </li>
    )
}
