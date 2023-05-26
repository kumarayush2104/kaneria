import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoMain from '../../src/assets/header/logo.png'
import LogoSecondary from '../../src/assets/header/logo-two.png'

export default function Navbar() {

    const [currentUrl, setCurrentUrl] = useState("/");
    const urlLocation = useLocation();
   
    useEffect(() => {
        setCurrentUrl(window.location.pathname)
    }, [urlLocation])

    useEffect(() => {
        window.$(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    }, [])

    return (
        <div className="navbar-area sticky-top">
            <div className="mobile-nav">
                <Link to="/" className="logo"><img src={LogoSecondary} alt="Kaneria Logo" /></Link>
            </div>
            <div className="main-nav two three">
                <div className="container-fluid ">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/"><img src={LogoMain} alt="Kaneria Logo" /></Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className={`nav-link ${currentUrl === "/"? "active" : null}`}>Home</Link></li>
                                <li className="nav-item">
                                    <a href="#!" className="nav-link dropdown-toggle">About Us<i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                        <Link to="/About-us"className="nav-link">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About-us/Profile" className="nav-link">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About-us/Our-team" className="nav-link">Our Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About-us/Plant" className="nav-link">Plant</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About-us/CSR" className="nav-link">CSR</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About-us/Sustainable-development" className="nav-link">Sustainable Development</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a href="#!" className="nav-link dropdown-toggle">Products<i className='bx bx-chevron-down'></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="/Product-details" className="nav-link">Ready Mix Plaster</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Product-details" className="nav-link">Block Jointing Mortar</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Product-details" className="nav-link">Gypsum Plaster</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Product-details" className="nav-link">Wall Putty</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Product-details" className="nav-link">Tile Adhesive</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link to="/Become-vendor" className={`nav-link ${currentUrl === "/Become-vendor"? "active" : null}`}>Become Vendor</Link></li>
                                <li className="nav-item"><Link to="/Career" className={`nav-link ${currentUrl === "/Career"? "active" : null}`}>Careers</Link></li>
                                <li className="nav-item"><Link to="/Contact-us" className={`nav-link ${currentUrl === "/Contact-us"? "active" : null}`}>Contacts </Link></li>
                            </ul>
                            <div className="side-nav">
                                <ul>
                                    <li>
                                        <div className="call">
                                            <i className="bx bxs-phone-call" />
                                            <a href="tel:+918238055562">GJ : +91 82380 55562</a>
                                            <a href="tel:+919099930276">MH : +91 90999 30276</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
