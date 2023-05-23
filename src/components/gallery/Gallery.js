import React, { useEffect } from 'react'
import Product1Image from '../../assets/home/product01.jpg';
import GalleryCard from './GalleryCard';

export default function Gallery() {

    useEffect(() => {
        window.$(function ($) {
            $(".popup-gallery").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } });
        })
    }, [])

    return (
        <>
            <div className="header_space"></div>
            {/* Gallery Section Start */}
            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row popup-gallery">
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                        <GalleryCard image={Product1Image} />
                    </div>
                </div>
            </div>
            {/* Gallery Section End */}
        </>
    )
}
