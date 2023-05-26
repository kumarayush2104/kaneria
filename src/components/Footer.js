// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Media
import PdfIcon from '../../src/assets/footer/pdf.png'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        {/* First Menu Start */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-service mobile_footer">
                                    <h3>Useful Links</h3>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/Become-vendor">Become Vendor</Link>
                                        </li>
                                        <li>
                                            <Link to="/Career">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/Clients">Clients</Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact-us">Contacts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* First Menu End */}

                        {/* Second Menu Start */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-service mobile_footer">
                                    <h3>Products</h3>
                                    <ul>
                                        <li>
                                            <Link to="/Product-details">Ready Mix Plaster</Link>
                                        </li>
                                        <li>
                                            <Link to="/Product-details">Block Jointing Mortar</Link>
                                        </li>
                                        <li>
                                            <Link to="/Product-details">Gypsum Plaster</Link>
                                        </li>
                                        <li>
                                            <Link to="/Product-details">Wall Putty</Link>
                                        </li>
                                        <li>
                                            <Link to="/Product-details">Tile Adhesive</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Second Menu End */}

                        {/* Download Brochure Start */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-service">
                                    <h3>Download Brochure</h3>
                                    <div className="brochure"><a href="https://kaneriaplast.com:5000/upload/pdf/47755-Brochure_KANERIA.pdf"><img src={PdfIcon} alt='' /> Kaneria Plast<i className='bx bx-chevron-down-circle'></i></a></div>
                                </div>
                            </div>
                        </div>
                        {/* Download Brochure End */}

                        {/* Social Media Section Start */}
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-social-media">
                                    <h3>See All Of Our Social Media</h3>
                                    <ul>
                                        <li>
                                            <a href="https://wa.me/+918238055517" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/KaneriaPlastSurat" target="_blank" rel="noreferrer"><i className='bx bxl-facebook'></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCOJRLeWtGE2Zfpf6E-uB7aA" target="_blank" rel="noreferrer"><i className='bx bxl-youtube'></i></a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com/in/kaneriaplast" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Social Media Section End */}
                    </div>
                </div>
            </footer>
            
            {/* Copywrite Section Start */}
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-item">
                                <p>© 2023 KANERIA PLAST PVT. LTD. </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="setblue">
                                <p>Website Designed by: <a href="https://www.setblue.com/" target="_blank" rel="noreferrer">Setblue</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CopyWrite Section End */}
        </>
    )
}
