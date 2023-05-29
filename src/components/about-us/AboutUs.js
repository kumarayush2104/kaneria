// Libraries
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Components
import AboutSectionTab from './AboutSectionTab'
import AboutSectionContent from './AboutSectionContent'
import AboutContentCard1 from './AboutContentCard1'
import AboutContentCard2 from './AboutContentCard2'
import AboutContentCard3 from './AboutContentCard3'

// Media
import CompanyImage from '../../assets/about-us/company.jpg'
import OurTeamImage from '../../assets/about-us/our-team.jpg'
import CSRImage from '../../assets/about-us/csr.jpg'
import ProfileImage from '../../assets/about-us/profile.jpg'
import PlantInfraImage from '../../assets/about-us/plant-infrastructure.jpg'
import LaboratoryImage from '../../assets/about-us/laboratory.jpg'
import MachineriesImage1 from '../../assets/about-us/machineries.jpg'
import MachineriesImage2 from '../../assets/about-us/machineries2.jpg'
import SandImage from '../../assets/about-us/SandImage.jpg'

export default function AboutUs() {

    const [location, setLocation] = useState("/About-us");
    const urlLocation = useLocation();

    // Checking for Pathname after every location update
    useEffect(() => {
        setLocation(window.location.pathname);
    }, [urlLocation])

    return (
        <>
            <div className="header_space"></div>

            {/* About Section Tabs Section Start */}
            <div className="page-tab-area ng-star-inserted">
                <ul className="nav" id="pills-tab" role="tablist">
                    <Link to="/About-us"><AboutSectionTab title={"About"} active={location === "/About-us" ? "active" : null} /></Link>
                    <Link to="/About-us/Profile"><AboutSectionTab title={"Profile"} active={location === "/About-us/Profile" ? "active" : null} /></Link>
                    <Link to="/About-us/Our-team"><AboutSectionTab title={"Our Team"} active={location === "/About-us/Our-team" ? "active" : null} /></Link>
                    <Link to="/About-us/Plant"><AboutSectionTab title={"Plant"} active={location === "/About-us/Plant" ? "active" : null} /></Link>
                    <Link to="/About-us/CSR"><AboutSectionTab title={"CSR"} active={location === "/About-us/CSR" ? "active" : null} /></Link>
                    <Link to="/About-us/Sustainable-development"><AboutSectionTab title={"Sustainable Development"} active={location === "/About-us/Sustainable-development" ? "active" : null} /></Link>
                </ul>
            </div>
            {/* About Section Tabs Section End */}

            <section className="aboutpage-area">
                <div className="container">
                    <div className="tab-content" id="pills-tabContent">

                        {/* Default About Tab Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>KANERIA GROUP is engaged in manufacturing innovative building materials in the Drymix segment having its giant manufacturing facility at Surat (Gujarat, India). The KANERIA GROUP has been promoted by professionals having long and successful experience in the various fields of manufacturing, marketing and logistics under the leadership of the Chairman of the company - Mr. Manoj Kaneria.</p>
                                <p>KANERIA GROUP is always committed to delivering high quality and best-in-class products &amp; services at reasonably low price by implementing smart ways &amp; With the Concept of Mass production.</p>
                            </>} image={CompanyImage} imageWidth="100%" />
                        </>} active={location === "/About-us" ? "show active" : null} />
                        {/* Default About Tab End */}

                        {/* Our Team Section Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Any extensive &amp; capital incentive resource is incomplete without an Organized, efficient, and productive team. We are extremely proud of being blessed with a strong, dedicated, and skilled workforce that constantly strives to innovate and committed deliver value to the end customer.</p>
                                <p>Each individual of the team is seasoned with experience of real exposure to challenges of constantly changing technological environment. Most all of us had able to cultivate high work skills about working at a microscopic level and integrated them successfully to achieve macro market-performance of our business model. Simple labor-force sourced from typically village side is oriented into well-disciplined army performance under clever supervision to bring bench-mark</p>
                            </>} image={OurTeamImage} imageWidth="100%" />
                        </>} active={location === "/About-us/Our-team" ? "show active" : null} />
                        {/* Our Team Section End */}

                        {/* CSR Section Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Kaneria strongly believes in giving back to society more than what is acquired. By following ethical use of resources and giving back to society in the form of donation, Charity, Upliftment of the lower section, Quality education for a better tomorrow and so on.</p>
                            </>} image={CSRImage} imageWidth="100%" />
                        </>} active={location === "/About-us/CSR" ? "show active" : null} />
                        {/* CSR Section End */}

                        {/* Profile Section Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard1 content={<>
                                <p>Who Are Kaneria Group?</p>
                                <p><strong>Mission</strong><br />To undergo rigorous technical research &amp; bring continuous innovation in products in order to offer the best quality product material with maximum value.</p>
                                <p><strong>Vision</strong><br />To redefine the construction industry by offering high quality, low-cost construction materials &amp; making it lucrative, easy &amp; fast for businesses.</p>
                                <p>Kaneria Group is engaged in manufacturing innovative building materials in the dry-mix segment. The group has been promoted by professionals from various fields having long and successful experience in the field of manufacturing, marketing, and logistics under the leadership of the Chairman of the company Mr. Manoj Kaneria. Presently following products are running successfully in MAHARASHTRA &amp; GUJRAT region.</p>
                                <ol className="ol_list">
                                    <li>Ready Mix Mortar</li>
                                    <li>Block Jointing Mortar</li>
                                    <li>Floor Screed Mortar</li>
                                    <li>Wall Putty</li>
                                    <li>Tile Adhesive</li>
                                    <li>AAC Blocks</li>
                                </ol>
                            </>} image={ProfileImage} imageWidth="100%" />
                        </>} active={location === "/About-us/Profile" ? "show active" : null} />
                        {/* Profile Section End */}

                        {/* Plant Section Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard2 title={"Plant"} content={<>
                                KANERIA PLAST Premix mortar Facility is spreaded across more than 25000 Sq.Meter Area with robust 24x7 running manufacturing lines to serve high capacity of daily 25000 bags (40kg)<br />
                                Facility uses contemporary technology & Tailor-made solution which is fully automated in operation still suits to Indian work-force-behavior.
                            </>} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/ad036918-1b41-4f15-90c7-ecd6024824b3"} />

                            <AboutContentCard1 content={<>
                                <h2>Plant has following Infrastructure</h2>
                                <p>* Mfg. facility comprise of various separate production lines such as <br />- Dry mix line -1 (350 ton/ day) - Dry Mix line -2 (150 ton/day) <br />- Dry Mix line -3 (100 ton/day) - Sand processing lines <br />- Fly ash packing line. <br />- Gypsum/ Wall putty <br />- 4 (200 Ton/day) * Fully<br />- equipped laboratory <br />* Labor quarters and staff accommodation facility <br />* Well furnished-administration building <br />* Well maintained kitchen serves Hygienic and healthy food - 3 meals a day- as per staff residential status (Same food for staff &amp; owners).</p>
                            </>} image={PlantInfraImage} alter={true} imageWidth="100%" />

                            <AboutContentCard1 content={<>
                                <h2>Machineries</h2>
                                <p>Our Huge manufacturing facility consists of Giant material handling, processing and storage equipments and machineries from reputed companies. This makes sure of continuous delivery of final products to match large scale demand.<br />These Automated machineries reduce production time as well cost along with Maintaining of superb quality &amp; consistency. <br />This machineries and equipments are tailor-made keeping site of work to be safer, productive, having low down-time and suiting ergonomic environment which reduces overall cost of production. <br />This machineries used in industrial operations significantly reduces costs, increase productivity and create a safer, more ergonomic production environment. This reduces overall cost of operation.</p>
                            </>} image={MachineriesImage1} imageWidth="100%" />

                            <AboutContentCard1 content={<>
                                <p>Plant arranged with wide range of material handling equipment &amp; movers like sturdy belt-conveyers, screw conveys, bucket elevators, bull-dozers, crane, tough loader, and dumpers available all the time. <br /><br /><strong>Major equipments are enlisted below</strong> <br />* Hi-tech Batch Mixers <br />* Rotary-sand-dryer <br />* Rotto-Bagging Machine <br />* Auto Bagging Machine <br />* Automatic-valves and weighing devices <br />* Vibratory screen <br />* Giant silos and Silos for raw material storage.</p>
                            </>} image={MachineriesImage2} alter={true} imageWidth="100%" />

                            <AboutContentCard1 content={<>
                                <h2>Laboratory</h2>
                                <p>For ensuring product performance intended and its life expectancy, the required material testing is carried out at our In-house fully equipped laboratory. <br />This analysis and inspection is following by rigorous testing procedures to verify both with established standards and internal bench mark. <br />This is equipped with apparatus and devices for precise, accurate and reliable testing of various physical, chemical, mechanical properties &amp; parameters. <br />This is done with various testing methodology for comprehensive understanding of product performance in terms of physical properties, strength, durability and performance insight. <br />This also helps our customer in evaluation of product &amp; process to meet tailored specifications &amp; regulatory requirements.&nbsp;</p>
                            </>} image={LaboratoryImage} imageWidth="100%" />

                            <AboutContentCard2 title={"Sand"} content={<>
                                Sand is low cost filler but very vital ingredient in terms of changing economy of Drymix mortar business. Along with Quality; procurement-cost of sand is key part in cost of product. Our sand management skills and thorough-experience in this trade make us distinct entity.
                            </>} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/2980acfa-1133-42be-8e89-99cb73233095"} />

                            <AboutContentCard1 content={<>
                                <h2>“Strengths in sand is Key for success in Drymix mortars”</h2>
                                <p>We ensure 24x7 availability of sand by maintaining inventories that can fulfill seasonal demand during the year..... <br /><br />...... Since our facility carries sand processing operation of drying, screening, grading, silt removing with separate and massive production lines</p>
                            </>} image={SandImage} imageWidth="100%" />

                            <div className="row mt-50">
                                <AboutContentCard3 title={"Drying"} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/2de79db8-ff3d-4e7b-a602-27da51849710"} />
                                <AboutContentCard3 title={"Unloading in silo- to start sand processing"} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/413dded7-5cd9-4c1c-a633-df3c060f178d"} />
                                <AboutContentCard3 title={"Coarse Particles Removal"} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/5319bb25-9112-450b-bcaa-2c445f945c6f"} />
                                <AboutContentCard3 title={"Silt Removal"} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/ecf854e8-e162-4a64-b707-0460bd6db4ce"} />
                            </div>

                        </>} active={location === "/About-us/Plant" ? "show active" : null} />
                        {/* Plant Section End */}

                        {/* Sustainable Development Section Start */}
                        <AboutSectionContent content={<>
                            <AboutContentCard2 image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/a15893e2-4312-454c-b6b8-466baf1429cc"} />

                            <AboutContentCard2 content={<>
                                Kaneria is Well known among sustainability champions with the goal of replacing traditional heavy bricks that cause severe harm to the cultivable soil and farm with AAC Block (Aerated autoclaved concrete blocks) that recycle fly-ash, a waste generated in steel furnaces.
                            </>} />

                            <AboutContentCard2 title={"Envionment"} content={<>
                                At Kaneria, business is done in harmony with the environment. We understand our core responsibility towards environmental sustainability, and we are committed to minimizing our impact on the environment. Our manufacturing units are certified to ISO 9001:2015.
                            </>} />

                            <AboutContentCard1 content={<>
                                <h4>Our Environment strategy focuses on four key areas:</h4>
                                <p>1. Climate Change (Energy Management) <br />2. Water management <br />3. Biodiversity Management <br />4. Circular economy (Waste/Resource Management)</p>
                                <h4>Google also states that:-</h4>
                                <p>AAC possesses significant environmental advantages over conventional building materials, such as insulation, longevity, and structural demands in one material. AAC helps to reduce at least 30% of environmental waste than traditional concrete. Moreover, a decrease of 50% of greenhouse gas emissions can be achieved. <br />Kaneria thoroughly believes and takes maximum precaution to not waste single natural resources and use every single resource to its maximum potential.</p>
                            </>} alter={true} image={"https://drive.tiny.cloud/1/rgtxh7d736nxo89ev2vg6bpkvliemoz0s0hz7puv7r510vsn/715043ff-6ed3-48a8-9926-2c22b5679402"} imageWidth="350" />

                        </>} active={location === "/About-us/Sustainable-development" ? "show active" : null} />
                        {/* Sustainable Development Section End */}

                    </div>
                </div>
            </section>
        </>
    )
}
