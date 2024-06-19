import { useEffect } from 'react';
import './App.css';
import Integration from './components/Home/Integration';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports
import About from './components/About/about.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* <h1 className=' bg-slate-400'>Helloo World</h1> */}
      {/* <Integration /> */}
      {/* <About /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Integration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
