import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
