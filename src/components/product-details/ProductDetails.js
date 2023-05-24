import React from 'react'
import { Link } from 'react-scroll'
import BannerImage from '../../assets/product-details/product_banner.jpg'
import ProductDescriptionCard from './ProductDescriptionCard'
import BenefitImage1 from '../../assets/product-details/benefit01.png'
import BenefitImage2 from '../../assets/product-details/benefit02.png'
import BenefitImage3 from '../../assets/product-details/benefit03.png'
import BenefitImage4 from '../../assets/product-details/benefit04.png'
import BenefitImage5 from '../../assets/product-details/benefit05.png'
import BenefitImage6 from '../../assets/product-details/benefit06.png'
import BenefitImage7 from '../../assets/product-details/benefit07.png'
import BenefitImage8 from '../../assets/product-details/benefit08.png'
import BenefitImage9 from '../../assets/product-details/benefit09.png'
import BenefitImage10 from '../../assets/product-details/benefit10.png'
import ProductFeatureCard from './ProductFeatureCard'
import ProductSpecsCard from './ProductSpecsCard'
import WarningIcon from '../../assets/product-details/Warning.png'

export default function ProductDetails() {

    const setActivetab = (e) => {
        window.$('.nav-btn').removeClass('active');
        e.target.className = "nav-btn active"
    }

    return (
        <>
            <div className="header_space"></div>

            {/* Navigation Tab Section Start */}
            <div id="nav-wrap">
                <div id="scroller-anchor"></div>
                <div id="nav">
                    <ul className="clearfix">
                        <Link className="nav-btn active" offset={-150} to="row1" onClick={(e) => setActivetab(e)}>Product Description</Link>
                        <Link className="nav-btn" offset={-150} to="row2" onClick={(e) => setActivetab(e)}>Features & Benefits</Link>
                        <Link className="nav-btn" offset={-150} to="row3" onClick={(e) => setActivetab(e)}>Technical Specifications</Link>
                        <Link className="nav-btn" offset={-150} to="row4" onClick={(e) => setActivetab(e)}>Warning</Link>
                    </ul>
                </div>
            </div>
            {/* Navigation Tab Section End */}

            {/* Page Banner Section Start */}
            <div className="pd_banner">
                <img src={BannerImage} className="img_full" alt='Banner' />
            </div>
            {/* Page Banner Section End */}


            <div id="content-wrap">

                {/* Product Description Section Start */}
                <div className="Description_section row-nav" id="row1">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sub-title">DESCRIPTION</span>
                            <h2>Product Description</h2>
                        </div>
                        <p>Kaneria ready mix plaster in best alternative against traditional On site mixing and Procurement procedure for plastering, Kaneria ready mix plaster is manufactured with well graded sand along with best quality cement and polymer based additives.</p>
                        <div className="row">
                            <div className="col-lg-6 border-right">
                                <ProductDescriptionCard title={"The Product"} content={"Kaneria Ready-Mix is manufactured with high quality well graded river sand along with best quality cement & water soluble additives."} />
                                <ProductDescriptionCard title={"How To Use?"} content={"For mixing we recommend mechanical mixer - Stirrer. Add almost 7 to 8 litres of water in a single bag mix. Mix the content along with water ror 4 to 5 minutes. After mixing leave the mix for 2 to 3 minutes to dissolve the additives used. For better result and consistency use of water should be observed."} />
                                <ProductDescriptionCard title={"Application Of The Mix"} content={"The mix should apply by mason or one may use spray-machine for plastering. it is also advisable to treat RCC surface by Chat Plaster prior a day or to hake the surface properly."} />
                            </div>

                            <div className="col-lg-6">
                                <ProductDescriptionCard title={"Where To Use?"} content={"Kaneria Ready-Mix can be used for internal & external plastering application."} />
                                <ProductDescriptionCard title={"Surface Preparation"} content={"Kaneria Ready-Mix can be used for internal & external plastering application."} />
                                <ProductDescriptionCard title={"Curing"} content={"Curing can be done after 24 hours for 2-3 times for 5-7 days. in high humid condition one can reduce the frequency per day."} />
                                <ProductDescriptionCard title={"Packaging / Storage"} content={"Available in 40 kg HDPE laminated bag. The product should be stored in cool and dry place, should be used within 6 months from the date of manufacturing."} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Description Section End */}

                {/* Product Feature Section Start */}
                <div className="Features_section row-nav" id="row2">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sub-title">FEATURES & BENEFIT</span>
                            <h2 className="white">Features & Benefit</h2>
                        </div>

                        <div className="row">
                            <ProductFeatureCard image={BenefitImage1} content={"Quality plaster due to best in class particle size distribution."} />
                            <ProductFeatureCard image={BenefitImage2} content={"Surface obtained is highly impermeable due to best grading, hence became water-tight."} />
                            <ProductFeatureCard image={BenefitImage3} content={"Very less rebound loss."} />
                            <ProductFeatureCard image={BenefitImage4} content={"High durability cuts repair and maintenance cost."} />
                            <ProductFeatureCard image={BenefitImage5} content={"No hassle of maintaining mortar ratio."} />
                            <ProductFeatureCard image={BenefitImage6} content={"Available round the year."} />
                            <ProductFeatureCard image={BenefitImage7} content={"Easy to count number of bags which is very much useful for reconciliation."} />
                            <ProductFeatureCard image={BenefitImage8} content={"Completely legal."} />
                            <ProductFeatureCard image={BenefitImage9} content={"Excellent workability."} />
                            <ProductFeatureCard image={BenefitImage10} content={"Easy to use."} />
                        </div>
                    </div>
                </div>
                {/* Product Feature Section End */}


                {/* Product Specification Section Start */}
                <div id="row3" className="Description_section row-nav">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sub-title">SPECIFICATIONS</span>
                            <h2>Technical Specifications</h2>
                        </div>

                        <div className="row">
                            <table className="table">
                                <ProductSpecsCard title={"Appearance"} content={"Grey Coloured Powder (Granular)"} />
                                <ProductSpecsCard title={"Aggregate"} content={"well graded river-sand"} gray={true} />
                                <ProductSpecsCard title={"Basic Binder"} content={"Ordinary Portland Cement"} />
                                <ProductSpecsCard title={"Additives"} content={"Quality water soluble additives for better bounding and strength"} gray={true} />
                                <ProductSpecsCard title={"Bulk Density"} content={"1.4 -1.7 kg / Litre"} />
                                <ProductSpecsCard title={"POTLife"} content={"1-2 Hours"} gray={true} />
                                <ProductSpecsCard title={"Water Ratio"} content={"17-19% by weight"} />
                                <ProductSpecsCard title={"Compressive Strength"} content={"As per IS 4031-Part-6"} gray={true} />
                                <ProductSpecsCard title={"Coverage"} content={"For 10 to 12mm thickness on block masonry coverage is approx. 16 to 17 sq.ft."} />
                            </table>
                        </div>
                    </div>
                </div>
                {/* Product Specification Section End */}

                {/* Warning Section Start */}
                <div id="row4" className="warning_section row-nav">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sub-title">WARNING</span>
                            <h2>Warning</h2>
                        </div>
                        <div className="col-lg-6 mx-auto text-center">
                            <img src={WarningIcon} className="warning_icon" alt='Warning Icon' />
                            <p>There are no toxic materials in the product. Care should be taken to avoid dust inhalation while mixing and handling. In case of contact with eyes wash gently with plenty of water, take medical advice if needed.</p>
                        </div>
                    </div>
                </div>
                {/* Warning Section End */}
            </div>
        </>
    )
}
