
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-display font-medium">
                <span className="text-shimmer">Cloud Engineer</span>
              </div>
              <p className="text-muted-foreground mt-2 max-w-md">
                Building resilient, secure and efficient cloud infrastructure for the modern web.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-full bg-accent hover:bg-primary/10 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cloud Engineer Portfolio. All rights reserved.
            </div>
            
            <div className="flex flex-wrap mt-4 md:mt-0 gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                Resume <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
