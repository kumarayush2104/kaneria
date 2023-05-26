// Libraries
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import ContactUs from './components/contact-us/ContactUs';
import Gallery from './components/gallery/Gallery';
import Career from './components/career/Career';
import ProductDetails from './components/product-details/ProductDetails';
import BecomeVendor from './components/become-vendor/BecomeVendor';
import AboutUs from './components/about-us/AboutUs';
import Client from './components/client/Client';

function App() {

  const currentUrl = useLocation();

  window.$(function ($) {
    // Function to show BottomToTop Button
    $(window).scroll(function () {
      var btn = $('#toTop');
      if ($(window).scrollTop() > 300) {
        btn.attr("style", "display: block !important");
      } else {
        btn.attr("style", "display: none !important");
      }
    })

    // Function of BottomToTop Button
    $('#toTop').click(function () {
      $('html, body').animate({ scrollTop: '0px' }, 100);
    });
  });

  useEffect(() => {
    window.$(($) => {
      // Loading Animation
      $('.loader').fadeIn(1);
      $(document).ready(function () {
        $('.loader').fadeOut(100);
      });

      // Scroll to Top when location URL location changes.
      window.scrollTo(0, 0);
    })
  }, [currentUrl])

  return (
    <>
      {/* Loading Animation Section Start */}
      <div class="loader">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="loading-wrapper">
              <div class="loading"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Loading Animation Section End */}


      {/* Bottom To Top Button Start*/}
      <div id="toTop" className="back-to-top-btn">
        <i className="bx bx-up-arrow-alt" />
      </div>
      {/* Bottom To Top Button End */}

      {/* Components Line Up Start */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Contact-us' element={<ContactUs />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/Career' element={<Career />} />
        <Route exact path='/Product-details' element={<ProductDetails />} />
        <Route exact path='/Become-vendor' element={<BecomeVendor />} />
        <Route exact path='/About-us' element={<AboutUs />} >
          <Route exact path='/About-us/Profile' element={<AboutUs />} />
          <Route exact path='/About-us/CSR' element={<AboutUs />} />
          <Route exact path='/About-us/Our-Team' element={<AboutUs />} />
          <Route exact path='/About-us/Sustainable-development' element={<AboutUs />} />
          <Route exact path='/About-us/Plant' element={<AboutUs />} />
        </Route>
        <Route exact path="/Clients" element={<Client />} />
      </Routes>
      <Footer />
      {/* Components Line Up End */}
    </>
  );
}

export default App;
