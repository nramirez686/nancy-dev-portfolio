import { Routes, Route } from 'react-router-dom';
import NavTabs from './components/NavTab'; // Make sure to import your Navbar component
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <NavTabs /> {/* This is your Navbar or Navigation Component */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* Aboutme default*/}
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
