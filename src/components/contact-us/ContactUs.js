// Library
import React, { useEffect } from 'react'

// Components
import OurOfficeCard from './OurOfficeCard'

export default function ContactUs() {

    useEffect(() => {

        // Initializing Form Validator Module
        window.$((function ($) {
            $("#contactForm").validator().on("submit", function (event) { if (event.isDefaultPrevented()) { formError(); } else { event.preventDefault(); submitForm(); } }); function submitForm() { var name = $("#name").val(); var email = $("#email").val(); var msg_subject = $("#msg_subject").val(); var phone_number = $("#phone_number").val(); var message = $("#message").val(); $.ajax({ type: "POST", url: "assets/php/form-process.php", data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message, success: function (text) { if (text === "success") { formSuccess(); } else { formError(); alert(text); } } }); }
            function formSuccess() { $("#contactForm")[0].reset(); alert("Message Submitted!") }
            function formError() { $(this).removeClass(); }
        }(window.jQuery)));
    }, [])

    return (
        <>
            <div className="header_space"></div>

            {/* Our Office Section Start */}
            <div className="container">
                <div className="contact-area two contact-details">
                    <div className="row m-3">
                        <OurOfficeCard title={"Corporate Office"} address={"301, Milestone Milagro, 3rd Floor, Someshwara Char Rasta, Opp. CNG Station, Vesu, Surat - 395 007."} mobile1={"+919978988125"} mobile2={"02612977460"} email={"info@kaneriaplast.com"} />
                        <div className="col-lg-6 ng-star-inserted"><iframe title="Corporate Office" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119071.59255126223!2d72.778832!3d21.152905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd79e317a570a9a1a!2sKANERIA%20PLAST%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1620108557881!5m2!1sen!2sin"></iframe></div>
                    </div>
                    <div className='row m-3'>
                        <div className="col-lg-6 ng-star-inserted"><iframe title="Mumbai Office" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6204096974766!2d72.86647977507985!3d19.211774882020972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b730b384f801%3A0xa3d7df8d2fadf820!2sRohan%20Arcade!5e0!3m2!1sen!2sin!4v1684755696925!5m2!1sen!2sin"></iframe></div>
                        <OurOfficeCard title={"Mumbai Office"} address={"6th Floor , Rohan Arcade, off Western Express Highway, Above Jan-Seva Sahkari Bank Dattani Park,Thakur Village, Kandivali ( W ) Mumbai - 400101 ."} mobile1={"+919321520401"} mobile2={"+919321520402"} email={"info@kaneriagroup.com"} />
                    </div>
                </div>
            </div>
            {/* Our Office Section End */}

            {/* Contact Us Form Section Start */}
            <section className="contact-area gray_bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="contact-area two form-pd">
                                <div className="container"><div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-form">
                                            <h3>Enquiry Form</h3>
                                            <form id="contactForm" className="ng-pristine ng-invalid ng-touched">
                                                <div className="row"><div className="col-sm-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label>Name *</label>
                                                        <input type="text" formcontrolname="name" className="form-control" data-error="Please enter your name" required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                    <div className="col-sm-6 col-lg-6"><div className="form-group">
                                                        <label>Email *</label>
                                                        <input type="email" formcontrolname="email" className="form-control" data-error="Please enter your email" required />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6">
                                                        <div className="form-group">
                                                            <label>Mobile *</label>
                                                            <input type="number" formcontrolname="mobile" className="form-control" data-error="Please Enter your mobile number" required />
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-6">
                                                        <div className="form-group">
                                                            <label>Product *</label>
                                                            <select formcontrolname="product_id" className="form-control ng-pristine ng-invalid ng-touched">
                                                                <option value="AAC Blocks" className="ng-star-inserted">AAC Blocks</option>
                                                                <option value="Dry Ready Mix Mortar" className="ng-star-inserted">Dry Ready Mix Mortar</option>
                                                                <option value="Block Jointing Mortar" className="ng-star-inserted">Block Jointing Mortar</option>
                                                                <option value="Floor Screed Mortar" className="ng-star-inserted">Floor Screed Mortar</option>
                                                                <option value="Wall Putty" className="ng-star-inserted">Wall Putty</option>
                                                                <option value="Tile Adhesive" className="ng-star-inserted">Tile Adhesive</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-lg-12">
                                                        <div className="form-group">
                                                            <label>Message *</label>
                                                            <textarea formcontrolname="message" cols="30" rows="5" maxlength="255" className="form-control" data-error="Please enter your message" required></textarea>
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-lg-12 text-right">
                                                        <button type="submit" className="cmn-btn btn">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
            {/* Contact Us form Section End  */}
        </>
    )
}
