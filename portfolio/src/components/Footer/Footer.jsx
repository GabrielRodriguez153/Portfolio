const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-8">
            <a href="#" className="text-2x font-bold text-white">
              Byte<span className="text-orange-500">Brew</span>
            </a>
            <p className="text-gray-400 mt-2">Desenvolvedor Full-Stack</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transation-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transation-colors"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transation-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transation-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Gabriel Henrique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
