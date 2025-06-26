
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Adarsh Tomar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
