import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    return (
        <div className="service-item">
            <div className="service-top">
                <Link to="/service-details">
                    <img src={props.image} alt="Service" />
                </Link>
            </div>
            <div className="service-bottom">
                <h3>
                    {props.title}
                </h3>
            </div>
        </div>
    )
}
