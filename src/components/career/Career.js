// Library
import React, { useEffect } from 'react'

// Media
import CommaImage from '../../assets/career/comma.png'

export default function Career() {

    useEffect(() => {
        // Initializing Form Validator module
        window.$((function ($) {
            $("#contactForm").validator().on("submit", function (event) { if (event.isDefaultPrevented()) { formError(); } else { event.preventDefault(); submitForm(); } }); function submitForm() { var name = $("#name").val(); var email = $("#email").val(); var msg_subject = $("#msg_subject").val(); var phone_number = $("#phone_number").val(); var message = $("#message").val(); $.ajax({ type: "POST", url: "assets/php/form-process.php", data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&phone_number=" + phone_number + "&message=" + message, success: function (text) { if (text === "success") { formSuccess(); } else { formError(); alert(text); } } }); }
            function formSuccess() { $("#contactForm")[0].reset(); alert("Message Submitted!") }
            function formError() { $(this).removeClass(); }
        }(window.jQuery)));
    }, [])

    return (
        <>
            <div className="header_space"></div>

            {/* Career Banner Section Start */}
            <div className="careers_banner">
                <img src={CommaImage} alt='' />
                <br />
                Because the biggest challenges hold the <br />
                <span className="bold">biggest opportunities</span>
            </div>
            {/* Career Banner Section End */}

            <section className="careers-area">
                <div className="container-fluid">
                    <div className="row">
                        {/* Message from Kaneria Section Start */}
                        <div className="col-lg-6">
                            <div className="contact-area two form-pd">
                                <h3 className="mb-20">Working With Kaneria</h3>
                                <p>The work culture at Kaneria is built on the foundation of two pillars - trust and respect. Every team member is encouraged to make decisions and empowered to make decisions and encouraged to do so.</p>
                                <p>Our culture is that of inclusiveness, personal encouragement, performance recognition and promotion of talent and innovation. We understand that a dedicated team is undoubtedly the most prized asset any organisation can have and we provide ample learning and growth opportunities to ensure that your skills and productivity accelerate with time and responsibility. We pride ourselves in creating and maintaining a work ethic and a culture that is positive and supportive.</p>
                                <div className="email_resume">
                                    <div className="row no-gutters">
                                        <div className="col-lg-2"><i className='bx bx-mail-send'></i></div>
                                        <div className="col-lg-10">
                                            <div className="etext">
                                                <b>Email resumes to</b> <br />
                                                <a href="mailto:careers@kaneriaplast.com">careers@kaneriaplast.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Message from Kaneria Section End */}

                        {/* Career Form Section Start */}
                        <div className="col-lg-6 gray_bg">
                            <div className="contact-area two form-pd">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-form">
                                                <h3>Opportunities</h3>
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
                                                                <label>Apply For * (position)</label>
                                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
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

                                                        <div className="col-sm-12 col-lg-12">
                                                            <div className="form-group">
                                                                <label>Attach resume/cv *</label>
                                                                <div className="row no-gutters">
                                                                    <div className="col-lg-6">
                                                                        <input type="file" className="btn blue-btn" required data-error="Please upload your cv" />
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
                        {/* Career Form Section End */}
                    </div>
                </div>
            </section>
        </>
    )
}
