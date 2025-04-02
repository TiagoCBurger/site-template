import { useState, useEffect } from 'react';
import { Button } from './button';
import { MoonIcon, SunIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useTheme } from '@/components/theme-provider';

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lupi-dark/80 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-white">
            <span className="neon-text">Lupi</span> Mídias
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-white hover:text-[#39FF14] transition-colors">Serviços</a>
          <a href="#about" className="text-white hover:text-[#39FF14] transition-colors">Sobre</a>
          <a href="#portfolio" className="text-white hover:text-[#39FF14] transition-colors">Portfólio</a>
          <a href="#testimonials" className="text-white hover:text-[#39FF14] transition-colors">Depoimentos</a>
          <a href="#contact" className="neon-button">Fale Conosco</a>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-2"
          >
            {theme === "light" ? (
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <Cross1Icon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-lupi-dark/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-white hover:text-[#39FF14] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-[#39FF14] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#portfolio" 
                className="text-white hover:text-[#39FF14] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-[#39FF14] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#contact" 
                className="neon-button w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 