
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    return location.hash === path.substring(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (path: string) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/' && !path.includes('#')) {
      navigate(path);
      return;
    }
    
    if (path.includes('#')) {
      const elementId = path.split('#')[1];
      if (location.pathname === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="text-lg font-display font-medium cursor-pointer"
            onClick={() => scrollToSection('/')}
          >
            <span className="text-shimmer">Cloud Engineer</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`text-sm transition-all duration-300 hover:text-primary relative ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary rounded-full transform scale-in" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                  isActive(item.path) 
                    ? 'bg-accent text-primary' 
                    : 'hover:bg-accent/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
