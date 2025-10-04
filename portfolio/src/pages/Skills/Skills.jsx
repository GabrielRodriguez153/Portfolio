import { useState } from "react";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "Todas" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Banco de Dados" },
    { key: "tools", label: "Ferramentas" },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className="py-22 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Minhas Skills</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Tecnologias e ferramentas que domino e utilizo no meu dia a dia
        </p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.key
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cards de Skills */}
        <div className="skill-category">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className="skill-card bg-white p-6 rounded-2xl shadow-lg border-l-4 card-hover animate-fadeIn"
                style={{ borderLeftColor: skill.borderColor }}
                data-category={skill.category}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <IconComponent className={`text-2xl ${skill.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="skill-bar h-2 rounded-full bg-orange-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{skill.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
