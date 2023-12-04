import { Routes, Route } from 'react-router-dom';
import NavTabs from './components/NavTab'; // Make sure to import your Navbar component
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Layout from './components/Layout';
import "./App.css";


function App() {
  return (
    <Layout> {/* Place the Layout component here */}
      <NavTabs /> {/* This is your Navbar or Navigation Component */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* Aboutme default*/}
        <Route path="/" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;