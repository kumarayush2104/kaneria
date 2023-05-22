import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import BannerCard from '../Home/BannerCard';
import BannerImage1 from '../../assets/home/banner01.jpg'
import MobileBannerImage1 from '../../assets/home/banner_m1.jpg'

import ProductCard from './ProductCard';
import Product1Image from '../../assets/home/product01.jpg';
import Product2Image from '../../assets/home/product02.jpg';
import Product3Image from '../../assets/home/product03.jpg';
import Product4Image from '../../assets/home/product04.jpg';
import Product5Image from '../../assets/home/product05.jpg';

import TestmonialCard from './TestimonialCard';
import ClientImage1 from '../../assets/home/client1.png'
import ClientImage2 from '../../assets/home/client2.png'

import CounterCard from './CounterCard';

import ClientLogoCard from './ClientLogoCard'
import ClientLogo1 from '../../assets/home/logo1.png'
import ClientLogo2 from '../../assets/home/logo2.png'
import ClientLogo3 from '../../assets/home/logo3.png'
import ClientLogo4 from '../../assets/home/logo4.png'
import ClientLogo5 from '../../assets/home/logo5.png'
import ClientLogo6 from '../../assets/home/logo6.png'

import AboutBackgroundImage from '../../assets/home/about_bg.jpg'
import AboutSectionTab from './AboutSectionTab';
import AboutSectionContent from './AboutSectionContent';

export default function Home() {

    const bannerCarouselOptions = {
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        dots: true,
        items: 1,
        loop: true,
        margin: 0,
        smartSpeed: 1000,
    }

    const testimonialCarouselOptions = {
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 4000,
        dots: true,
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 1000,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } },
    }

    const clientLogoCarousel = {
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } },
    }

    return (
        <>
            {/* Banner Section Start */}
            <div className="banner-area">
                <OwlCarousel {...bannerCarouselOptions} className='owl-theme owl-carousel'>
                    <BannerCard bannerImage={BannerImage1} mobileBannerImage={MobileBannerImage1} />
                    <BannerCard bannerImage={BannerImage1} mobileBannerImage={MobileBannerImage1} />
                    <BannerCard bannerImage={BannerImage1} mobileBannerImage={MobileBannerImage1} />
                </OwlCarousel>
            </div>
            {/* Banner Section End */}

            {/* Products Section Start */}
            <section className="service-area ptb-100">
                <div className="container-fluid">
                    <div className="section-title text-center">
                        <span className="sub-title">Products</span>
                        <h2>
                            Products
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ProductCard image={Product1Image} title={"Ready mix Plaster"} />
                            <ProductCard image={Product2Image} title={"Block Jointing Mortar"} />
                            <ProductCard image={Product3Image} title={"Gypsum Plaster"} />
                            <ProductCard image={Product4Image} title={"Wall Putty"} />
                            <ProductCard image={Product5Image} title={"Tile Adhesive"} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Products Section End */}

            {/* Our Status Section Start */}
            <div className="counter-area pb-70">
                <div className="container">
                    <div className="row">
                        <CounterCard title={"Professionals"} number={99} />
                        <CounterCard title={"Repeat Customers"} number={420} />
                        <CounterCard title={"Products Delivered"} number={107} />
                        <CounterCard title={"Years Of Experience"} number={19} />
                    </div>
                </div>
            </div>
            {/* Our Status Section End */}

            {/* Testimonial Section Start */}
            <section className="client-area ptb-100">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sub-title">TESTIMONIAL</span>
                        <h2>What our clients say</h2>
                    </div>
                    <OwlCarousel {...testimonialCarouselOptions} className='owl-theme owl-carousel'>
                        <TestmonialCard image={ClientImage1} name={"Jeffrey E. Nicolas"} designation={"CEO, ABC Inc."} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                        <TestmonialCard image={ClientImage2} name={"Gloria Williams"} designation={"Manager"} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                        <TestmonialCard image={ClientImage1} name={"Jeffrey E. Nicolas"} designation={"CEO, ABC Inc."} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                        <TestmonialCard image={ClientImage2} name={"Gloria Williams"} designation={"Manager"} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                        <TestmonialCard image={ClientImage1} name={"Jeffrey E. Nicolas"} designation={"CEO, ABC Inc."} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                        <TestmonialCard image={ClientImage2} name={"Gloria Williams"} designation={"Manager"} message={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.”"} />
                    </OwlCarousel>
                </div>
            </section>
            {/* Testimonial Section End */}

            {/* About Section Start */}
            <div className="about-area" style={{ backgroundImage: `url(${AboutBackgroundImage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-content">
                                <div className="section-title text-center">
                                    <span className="sub-title">About</span>
                                    <h2>About Kaneria</h2>
                                </div>
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <AboutSectionTab title={"History"} reference={"history"} active={"active"} />
                                    <AboutSectionTab title={"Profile"} reference={"profile"} />
                                    <AboutSectionTab title={"Plant"} reference={"plant"} />
                                    <AboutSectionTab title={"Structure"} reference={"structure"} />
                                </ul>

                                <div className="tab-content" id="pills-tabContent">
                                    <AboutSectionContent tabName={"history"} buttonTitle={"View All"} content={"Before a decade ago, two friends decided to start the journey together by entering in the construction business. They started off with a small amount of money but with loads of confidence, support & passion to excel in the industry. Initially, they started with mining & supply of natural sand from Tapi river in Surat but in a very short span of time, Kaneria became the household name in the construction industry. Their professional commitments in supply, quality & on time delivery of sand have helped them to inch up the ladder of trust among their clients. Their vast & deep knowledge of sand acted as a catalyst in achieving the numero uno position in the construction business. Today Kaneria is a trusted & renowned brand name among the honchos of construction industry in supplying of high quality sand."} active={"active"} />
                                    <AboutSectionContent tabName={"profile"} buttonTitle={"Read More"} content={"Before a decade ago, two friends decided to start the journey together by entering in the construction business. They started off with a small amount of money but with loads of confidence, support & passion to excel in the industry. Initially, they started with mining & supply of natural sand from Tapi river in Surat but in a very short span of time, Kaneria became the household name in the construction industry. Their professional commitments in supply, quality & on time delivery of sand have helped them to inch up the ladder of trust among their clients. Their vast & deep knowledge of sand acted as a catalyst in achieving the numero uno position in the construction business. Today Kaneria is a trusted & renowned brand name among the honchos of construction industry in supplying of high quality sand."} />
                                    <AboutSectionContent tabName={"plant"} buttonTitle={"Read More"} content={"Before a decade ago, two friends decided to start the journey together by entering in the construction business. They started off with a small amount of money but with loads of confidence, support & passion to excel in the industry. Initially, they started with mining & supply of natural sand from Tapi river in Surat but in a very short span of time, Kaneria became the household name in the construction industry. Their professional commitments in supply, quality & on time delivery of sand have helped them to inch up the ladder of trust among their clients. Their vast & deep knowledge of sand acted as a catalyst in achieving the numero uno position in the construction business. Today Kaneria is a trusted & renowned brand name among the honchos of construction industry in supplying of high quality sand."} />
                                    <AboutSectionContent tabName={"structure"} buttonTitle={"Read More"} content={"Before a decade ago, two friends decided to start the journey together by entering in the construction business. They started off with a small amount of money but with loads of confidence, support & passion to excel in the industry. Initially, they started with mining & supply of natural sand from Tapi river in Surat but in a very short span of time, Kaneria became the household name in the construction industry. Their professional commitments in supply, quality & on time delivery of sand have helped them to inch up the ladder of trust among their clients. Their vast & deep knowledge of sand acted as a catalyst in achieving the numero uno position in the construction business. Today Kaneria is a trusted & renowned brand name among the honchos of construction industry in supplying of high quality sand."} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}

            {/* Client Logo Section Start */}
            <div className="logo-area ptb-100">
                <div className="container">
                    <div className="section-title text-left">
                        <span className="sub-title">CLIENTS</span>
                        <h2>Our Clients</h2>
                    </div>

                    <OwlCarousel className='owl-theme owl-carousel' {...clientLogoCarousel}>
                        <ClientLogoCard image={ClientLogo1} />
                        <ClientLogoCard image={ClientLogo2} />
                        <ClientLogoCard image={ClientLogo3} />
                        <ClientLogoCard image={ClientLogo4} />
                        <ClientLogoCard image={ClientLogo5} />
                        <ClientLogoCard image={ClientLogo6} />
                    </OwlCarousel>
                </div>
            </div>
            {/* Client Logo Section End */}

        </>
    )
}
