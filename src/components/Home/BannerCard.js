import React from 'react'

export default function BannerCard(props) {
    return (
        <div className="banner-item">
            <img className="desktop_banner" src={props.bannerImage} alt="Banner"/>
            <img className="mobile_banner" src={props.mobileBannerImage} alt="Banner" />
        </div>
    )
}
