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

  const categoryConfig = {
    frontend: {
      title: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      cardBorder: "border-l-4 border-l-blue-500",
      progressGradient: "from-blue-500 to-cyan-500",
    },
    backend: {
      title: "Backend",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      cardBorder: "border-l-4 border-l-green-500",
      progressGradient: "from-green-500 to-emerald-500",
    },
    database: {
      title: "Banco de Dados",
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      cardBorder: "border-l-4 border-l-purple-500",
      progressGradient: "from-purple-500 to-violet-500",
    },
    tools: {
      title: "Ferramentas",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      cardBorder: "border-l-4 border-l-orange-500",
      progressGradient: "from-orange-500 to-red-500",
    },
  };

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeFilter);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const SkillCard = ({ skill, category }) => {
    const IconComponent = skill.icon;
    const config = categoryConfig[category];

    return (
      <div
        key={skill.id}
        className={`skill-card bg-white p-4 rounded-xl shadow-md card-hover animate-fadeIn hover:shadow-lg transition-all duration-300 ${config.cardBorder}`}
      >
        <div className="flex items-center mb-3">
          <div className="bg-gray-100 p-2 rounded-lg mr-3">
            <IconComponent className={`text-xl ${skill.iconColor}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">{skill.title}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${config.progressGradient} transition-all duration-1000 ease-out`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">{skill.details}</p>
      </div>
    );
  };

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

        <div className="space-y-8">
          {activeFilter === "all" ? (
            Object.entries(groupedSkills).map(([category, skills]) => {
              const config = categoryConfig[category];
              return (
                <div
                  key={category}
                  className={`rounded-2xl p-6 ${config.bgColor} ${config.borderColor} border`}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-3 h-8 rounded-full bg-gradient-to-r ${config.gradient} mr-3`}
                    ></div>
                    <h3 className={`text-2xl font-bold ${config.textColor}`}>
                      {config.title}
                    </h3>
                    <span className="ml-3 px-3 py-1 text-sm rounded-full bg-white border">
                      {skills.length} skills
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        category={category}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className={`rounded-2xl p-6 ${categoryConfig[activeFilter]?.bgColor} ${categoryConfig[activeFilter]?.borderColor} border`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-3 h-8 rounded-full bg-gradient-to-r ${categoryConfig[activeFilter]?.gradient} mr-3`}
                ></div>
                <h3
                  className={`text-2xl font-bold ${categoryConfig[activeFilter]?.textColor}`}
                >
                  {categoryConfig[activeFilter]?.title}
                </h3>
                <span className="ml-3 px-3 py-1 text-sm rounded-full bg-white border">
                  {filteredSkills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    category={activeFilter}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
