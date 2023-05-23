import React from 'react'

export default function GalleryCard(props) {
    return (
        <div className="col-sm-6 col-lg-4">
            <div className="gallery-item">
                <img src={props.image} alt="Gallery" />
                <a href={props.image}>
                    <i className="flaticon-add"></i>
                </a>
            </div>
        </div>
    )
}
