import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/home/Home';
import ContactUs from './components/contact-us/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
