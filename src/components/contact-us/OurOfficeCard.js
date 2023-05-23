import React from 'react'

export default function OurOfficeCard(props) {
    return (
        <div className="col-lg-6">
            <div className="contact-place">
                <h3 className="contact_title">{`${props.title}:`}</h3>
                <div className="contact-item">
                    <h4><i className="flaticon-placeholder"></i>Our location</h4>
                    <span>{props.address}</span>
                </div>
                <div className="contact-item">
                    <h4><i className="flaticon-call"></i>Call us</h4>
                    <ul>
                        <li>
                            <span>Mobile:</span>
                            <a href={`tel:${props.mobile1}`}>{props.mobile1}</a>
                        </li>
                        <li>
                            <span>Mobile:</span>
                            <a href={`tel:${props.mobile2}`}>{props.mobile2}</a>
                        </li>
                    </ul>
                </div>
                <div className="contact-item">
                    <h4><i className="flaticon-email"></i>Email</h4>
                    <ul>
                        <li>
                            <span>Mail:</span>
                            <a href={`mailto:${props.email}`}><span className="__cf_email__">{props.email}</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
