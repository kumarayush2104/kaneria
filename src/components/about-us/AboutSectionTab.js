import React from 'react'

export default function AboutSectionTab(props) {
    return (
        <li className="nav-item ng-star-inserted" role="presentation">
            <button className={`nav-link ${props.active}`} href={`#${props.reference}`} role="tab">{props.title}</button>
        </li>
    )
}
