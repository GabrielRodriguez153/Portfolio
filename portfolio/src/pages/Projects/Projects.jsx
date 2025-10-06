import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section id="projetos" className="py-25 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Meus Projetos</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Confira alguns dos projetos que desenvolvi ao longo da minha carreira
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <i className={`${project.icon} text-white text-5xl z-10`}></i>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >
                    <i className="fab fa-github mr-1"></i> Código
                  </a>
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg"
          >
            Ver Todos os Projetos <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
