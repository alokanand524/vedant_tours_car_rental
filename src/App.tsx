import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking/:carId?" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;