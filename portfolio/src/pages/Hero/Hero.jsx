const Hero = () => {
  const socialLinks = [
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-github", url: "#" },
  ];

  return (
    <section
      id="home"
      className="gradient-bg text-white pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <p className="text-lg mb-2 text-white/80">Olá, eu sou</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Gabriel Henrique
          </h1>
          <h2 className="text-2xl md:text4xl font-semibold mb-6 typewriter gradient-text">
            Desenvolvedor Full-Stack
          </h2>
          <p className="text-lg mb-8 max-w-lg text-white/90">
            Transformo ideias em soluções digitais inovadoras com código limpo,
            design responsivo e performance excepcional.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="flex space-x-6 mt-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-white hover:text-orange-400 transition-colors text-xl"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center animate-fadeIn">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center animate-float">
            <div className="w-56 h-56 md:w-72 md:h-72 bg-orange-500/20 rounded-full flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                alt="João Silva"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
            <p className="font-medium">Disponível para Projetos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
