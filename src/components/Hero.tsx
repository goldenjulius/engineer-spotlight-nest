
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="section-container z-10 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`space-y-4 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Samuel Joseph
            </div>
            <h1 className="font-display font-bold leading-tight text-balance">
              <span className="text-shimmer">Cloud and DevOps Engineer</span> specializing in multi-cloud infrastructure
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Results-driven engineer with expertise in designing, automating, and optimizing mission-critical deployments across AWS, Azure, GCP, and Oracle Cloud.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.2s' }}>
            <a 
              href="#projects" 
              className="button-effect px-6 py-3 rounded-lg bg-primary text-white font-medium hover-scale"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="button-effect px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent/50 font-medium hover-scale"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
