import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Agents from './components/Agents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Agents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
