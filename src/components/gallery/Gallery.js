// Library
import React, { useEffect } from 'react'

// Component
import GalleryCard from './GalleryCard';

// Media
import Product1Image from '../../assets/home/product01.jpg';

export default function Gallery() {

    useEffect(() => {
        // Initializing Magnific Popup library
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
