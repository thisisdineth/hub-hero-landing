
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm py-4 px-6 md:px-12 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-ict-blue to-ict-teal flex items-center justify-center text-white font-bold text-xl">
            ICT
          </div>
          <span className="font-bold text-xl">Learning Hub</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-ict-blue transition-colors">
            Home
          </a>
          <a href="#courses" className="font-medium hover:text-ict-blue transition-colors">
            Courses
          </a>
          <a href="#features" className="font-medium hover:text-ict-blue transition-colors">
            Features
          </a>
          <a href="#faq" className="font-medium hover:text-ict-blue transition-colors">
            FAQ
          </a>
          <a href="#contact" className="font-medium hover:text-ict-blue transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-6 z-50 flex flex-col space-y-4">
          <a href="#" className="font-medium hover:text-ict-blue transition-colors">
            Home
          </a>
          <a href="#courses" className="font-medium hover:text-ict-blue transition-colors">
            Courses
          </a>
          <a href="#features" className="font-medium hover:text-ict-blue transition-colors">
            Features
          </a>
          <a href="#faq" className="font-medium hover:text-ict-blue transition-colors">
            FAQ
          </a>
          <a href="#contact" className="font-medium hover:text-ict-blue transition-colors">
            Contact
          </a>
          <Button className="btn-primary">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
