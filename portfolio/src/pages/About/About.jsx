import { experienceData } from "../../data/experienceData";

const About = () => {
  const infoItems = [
    {
      icon: "fas fa-graduation-cap",
      title: "Formação",
      description: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    },
    {
      icon: "fas fa-briefcase",
      title: "Experiência",
      description: "2+ anos como Desenvolvedor",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Localização",
      description: "Registro, SP - Brasil",
    },
    {
      icon: "fas fa-language",
      title: "Idiomas",
      description: "Português, Inglês",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Sobre Mim</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Conheça minha trajetória e paixão pelo desenvolvimento de software
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/5">
            <div className="relative mb-8">
              <div className="w-72 h-72 bg-gradient-to-r from-orange-500 to-blue-900 rounded-2xl rotate-6 absolute -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80"
                alt="Sobre mim"
                className="rounded-2xl shadow-xl w-72 h-72 object-cover"
              />
            </div>

            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Atualmente sou estudante do 6º semestre na FATEC Registro,
              cursando Tecnólogo em Desenvolvimento de Software Multiplataforma.
              Meu objetivo é construir uma carreira sólida como engenheiro de
              software, aprimorando continuamente minhas habilidades e me
              mantendo atualizado com as tecnologias emergentes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-50 p-3 rounded-xl"
                >
                  <div className="bg-orange-500/10 p-2 rounded-lg mr-3">
                    <i className={`${item.icon} text-orange-500 text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm"
              >
                <i className="fas fa-download mr-2"></i> Baixar CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-orange-500 text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors text-sm"
              >
                <i className="fas fa-envelope mr-2"></i> Contato
              </a>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <i className="fas fa-road mr-3 text-orange-500"></i>
                Minha Jornada
              </h3>

              <div className="space-y-8 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2"></div>

                {experienceData.map((item) => (
                  <div key={item.id} className="flex items-start relative">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                        item.type === "education"
                          ? "bg-blue-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      <i className={`${item.icon} text-lg`}></i>
                    </div>

                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-bold text-gray-800 mb-2 sm:mb-0">
                            {item.title}
                          </h4>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              item.type === "education"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            <i
                              className={`fas ${
                                item.type === "education"
                                  ? "fa-graduation-cap"
                                  : "fa-briefcase"
                              } mr-2`}
                            ></i>
                            {item.type === "education"
                              ? "Educação"
                              : "Experiência"}
                          </span>
                        </div>

                        <div className="flex items-center text-gray-600 mb-3">
                          <i className="fas fa-calendar-alt mr-2 text-orange-500"></i>
                          <span className="font-medium">{item.period}</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.type === "experience" && (
                            <>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                                React
                              </span>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                                Next.js
                              </span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                JavaScript
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <i className="fas fa-rocket text-orange-500 mr-2"></i>
                  <span className="text-sm text-gray-700">
                    Em busca de novas oportunidades!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
