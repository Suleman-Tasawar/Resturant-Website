// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hompage from './routes/hompage';
import About from './routes/about';
import Catering from './routes/catering';
import Quote from './routes/quote';
import Contact from './routes/contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/about" element={<About />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
