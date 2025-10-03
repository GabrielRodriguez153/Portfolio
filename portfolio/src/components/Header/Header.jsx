import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const navItems = ["Início", "Sobre", "Skills", "Projetos", "Contato"];

  return (
    <header className="fixed w-full glass-effect z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Byte<span className="text-orange-500">Brew</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Contato
          </a>
          <button
            onClick={() => setMobileHeaderOpen(!mobileHeaderOpen)}
            className="md:hidden text-white"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      <MobileHeader
        isOpen={mobileHeaderOpen}
        onClose={() => setMobileHeaderOpen(false)}
        items={navItems}
      />
    </header>
  );
};

export default Header;
