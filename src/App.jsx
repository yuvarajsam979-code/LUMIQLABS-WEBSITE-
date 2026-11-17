import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Recruitment from './components/Recruitment';
import IdeaSubmission from './components/IdeaSubmission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="min-h-screen bg-brand-deep font-sans text-slate-200 transition-colors duration-500">
      <ParticlesBackground />
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Recruitment />
        <IdeaSubmission />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
