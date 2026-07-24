import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CurrentFocus from './components/CurrentFocus.jsx';
import AISystems from './components/AISystems.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurrentFocus />
        <AISystems />
        <Projects />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
