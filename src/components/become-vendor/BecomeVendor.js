// Library
import React, { useEffect } from 'react'

// Media
import CommaImage from '../../assets/career/comma.png'

export default function BecomeVendor() {

    useEffect(() => {
        // Initializing form validator module
        window.$((function ($) {
            $("#contactForm").validator().on("submit", function (event) { if (event.isDefaultPrevented()) { formError(); } else { event.preventDefault(); submitForm(); } }); function submitForm() { var name = $("#name").val(); var email = $("#email").val(); var msg_subject = $("#msg_subject").val(); var phone_number = $("#phone_number").val(); var message = $("#message").val(); $.ajax({ type: "POST", url: "assets/php/form-process.php", data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message, success: function (text) { if (text === "success") { formSuccess(); } else { formError(); alert(text); } } }); }
            function formSuccess() { $("#contactForm")[0].reset(); alert("Message Submitted!") }
            function formError() { $(this).removeClass(); }
        }(window.jQuery)));
    }, [])

    return (
        <>
            <div className="header_space"></div>

            {/* Vendor Banner Section Start */}
            <div className="careers_banner">
                <img src={CommaImage} alt='' />
                <br />
                <span className="bold">Become Vendor</span>
            </div>
            {/* Vendor Banner Section End */}

            <section className="careers-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-lg-2 gray_bg'></div>
                        {/* Vendor Form Section Start */}
                        <div className="col-lg-8 gray_bg">
                            <div className="contact-area two form-pd">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-form">
                                                <h3>Become Vendor</h3>
                                                <form id="contactForm">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Name *</label>
                                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Email *</label>
                                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Mobile No *</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>City *</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>State *</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Pincode *</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your pincode" className="form-control" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Vendor for the Product *</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter the Product name" className="form-control" />
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Quotation</label>
                                                                <div className="row no-gutters">
                                                                    <div className="col-lg-6">
                                                                        <input type="file" className="btn blue-btn" data-error="Please upload your cv" />
                                                                    </div>
                                                                    <div className="help-block with-errors"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-6">
                                                            <button type="submit" className="cmn-btn btn w-100">
                                                                Apply Now
                                                            </button>
                                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Vendor Form Section End */}
                        <div className='col-lg-2 gray_bg'></div>
                    </div>
                </div>
            </section>
        </>
    )
}
