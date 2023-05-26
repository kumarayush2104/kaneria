import React, { useEffect, useState } from 'react'
import AboutSectionTab from './AboutSectionTab'
import AboutSectionContent from './AboutSectionContent'
import AboutContentCard1 from './AboutContentCard1'
import CompanyImage from '../../assets/about-us/company.jpg'
import OurTeamImage from '../../assets/about-us/our-team.jpg'
import CSRImage from '../../assets/about-us/csr.jpg'
import ProfileImage from '../../assets/about-us/profile.jpg'
import { Link, useLocation } from 'react-router-dom'

export default function AboutUs() {

    const [location, setLocation] = useState("/About-us");
    const urlLocation = useLocation();
    useEffect(() => {
        setLocation(window.location.pathname);
    }, [urlLocation])
    return (
        <>
            <div class="header_space"></div>
            <div class="page-tab-area ng-star-inserted">
                <ul className="nav" id="pills-tab" role="tablist">
                    <Link to="/About-us"><AboutSectionTab title={"About"} active={location === "/About-us" ? "active" : null} /></Link>
                    <Link to="/About-us/Profile"><AboutSectionTab title={"Profile"} active={location === "/About-us/Profile" ? "active" : null} /></Link>
                    <Link to="/About-us/Our-team"><AboutSectionTab title={"Our Team"} active={location === "/About-us/Our-team" ? "active" : null} /></Link>
                    <Link to="/About-us/Plant"><AboutSectionTab title={"Plant"} active={location === "/About-us/Plant" ? "active" : null} /></Link>
                    <Link to="/About-us/CSR"><AboutSectionTab title={"CSR"} active={location === "/About-us/CSR" ? "active" : null} /></Link>
                    <Link to="/About-us/Sustainable-development"><AboutSectionTab title={"Sustainable Development"} active={location === "/About-us/Sustainable-development" ? "active" : null} /></Link>
                </ul>
            </div>
            <section class="aboutpage-area">
                <div class="container">
                    <div className="tab-content" id="pills-tabContent">
                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>KANERIA GROUP is engaged in manufacturing innovative building materials in the Drymix segment having its giant manufacturing facility at Surat (Gujarat, India). The KANERIA GROUP has been promoted by professionals having long and successful experience in the various fields of manufacturing, marketing and logistics under the leadership of the Chairman of the company - Mr. Manoj Kaneria.</p>
                                <p>KANERIA GROUP is always committed to delivering high quality and best-in-class products &amp; services at reasonably low price by implementing smart ways &amp; With the Concept of Mass production.</p>
                            </>} image={CompanyImage} />
                        </>} active={location === "/About-us" ? "show active" : null} />

                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Any extensive &amp; capital incentive resource is incomplete without an Organized, efficient, and productive team. We are extremely proud of being blessed with a strong, dedicated, and skilled workforce that constantly strives to innovate and committed deliver value to the end customer.</p>
                                <p>Each individual of the team is seasoned with experience of real exposure to challenges of constantly changing technological environment. Most all of us had able to cultivate high work skills about working at a microscopic level and integrated them successfully to achieve macro market-performance of our business model. Simple labor-force sourced from typically village side is oriented into well-disciplined army performance under clever supervision to bring bench-mark</p>
                            </>} image={OurTeamImage} />
                        </>} active={location === "/About-us/Our-team" ? "show active" : null} />

                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Kaneria strongly believes in giving back to society more than what is acquired. By following ethical use of resources and giving back to society in the form of donation, Charity, Upliftment of the lower section, Quality education for a better tomorrow and so on.</p>
                            </>} image={CSRImage} />
                        </>} active={location === "/About-us/CSR" ? "show active" : null} />

                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Who Are Kaneria Group?</p>
                                <p><strong>Mission</strong><br />To undergo rigorous technical research &amp; bring continuous innovation in products in order to offer the best quality product material with maximum value.</p>
                                <p><strong>Vision</strong><br />To redefine the construction industry by offering high quality, low-cost construction materials &amp; making it lucrative, easy &amp; fast for businesses.</p>
                                <p>Kaneria Group is engaged in manufacturing innovative building materials in the dry-mix segment. The group has been promoted by professionals from various fields having long and successful experience in the field of manufacturing, marketing, and logistics under the leadership of the Chairman of the company Mr. Manoj Kaneria. Presently following products are running successfully in MAHARASHTRA &amp; GUJRAT region.</p>
                                <ol class="ol_list">
                                    <li>Ready Mix Mortar</li>
                                    <li>Block Jointing Mortar</li>
                                    <li>Floor Screed Mortar</li>
                                    <li>Wall Putty</li>
                                    <li>Tile Adhesive</li>
                                    <li>AAC Blocks</li>
                                </ol>
                            </>} image={ProfileImage} />
                        </>} active={location === "/About-us/Profile" ? "show active" : null} />

                    </div>
                </div>
            </section>
        </>
    )
}
