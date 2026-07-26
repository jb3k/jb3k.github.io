import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CurrentFocus from './components/CurrentFocus.jsx';
import AISystems from './components/AISystems.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import PuttingLineDivider from './components/PuttingLineDivider.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PuttingLineDivider />
        <CurrentFocus />
        <PuttingLineDivider reverse compact />
        <AISystems />
        <PuttingLineDivider compact />
        <Projects />
        <PuttingLineDivider reverse />
        <Experience />
        <PuttingLineDivider compact />
        <About />
      </main>
      <PuttingLineDivider reverse compact />
      <Footer />
    </>
  );
}
