
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'React Specialist', 
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Adrash Tomar</span>
            <span className="block text-gradient">Developer</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-white/80">
              I'm a{' '}
              <span className="text-gradient font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web applications
            that solve real-world problems and deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={scrollToAbout}
            >
              View My Work
            </Button>
            <Button 
              colors ="black"
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-6 h-6 text-white/60 cursor-pointer hover:text-white transition-colors" 
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
