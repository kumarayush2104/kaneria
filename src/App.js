import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import ContactUs from './components/contact-us/ContactUs';
import Gallery from './components/gallery/Gallery';
import Career from './components/career/Career';
import ProductDetails from './components/product-details/ProductDetails';

function App() {

  window.$(function ($) {
    $(window).scroll(function () {
      var btn = $('#toTop');
      if ($(window).scrollTop() > 300) {
        btn.attr("style", "display: block !important");
      } else {
        btn.attr("style", "display: none !important");
      }
    })

    $('#toTop').click(function () {
      $('html, body').animate({ scrollTop: '0px' }, 300);
    });
  });

  return (
    <>
      <div id="toTop" className="back-to-top-btn"><i className="bx bx-up-arrow-alt"></i></div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Contact-us' element={<ContactUs />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/Career' element={<Career />} />
        <Route exact path='/Product-details' element={ <ProductDetails /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
