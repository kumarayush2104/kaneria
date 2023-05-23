import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import ContactUs from './components/contact-us/ContactUs';
import Gallery from './components/gallery/Gallery';
import Career from './components/career/Career';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Contact-us' element={<ContactUs />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        <Route exact path='/Career' element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
