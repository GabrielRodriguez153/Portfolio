import { useEffect, useState } from "react";
import ImageHero from "../../assets/HomeLogo.svg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Desenvolvedor Full-Stack";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;

    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    const startTimer = setTimeout(typeWriter, 500);

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <section
      id="início"
      className="gradient-bg text-white min-h-[98vh] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 py-8">
        <div className="md:w-3/5 mb-8 md:mb-0 animate-fadeIn md:pr-8">
          <p className="text-lg mb-2 text-white/80">Olá, eu sou</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Gabriel Henrique
          </h1>

          <div className="mb-4 h-8 md:h-10 flex items-center">
            <h2 className="text-xl md:text-2xl font-semibold gradient-text inline-flex items-center">
              <span className="typewriter-text">{displayText}</span>
              {!isTypingComplete && (
                <span className="typewriter-caret ml-1">|</span>
              )}
            </h2>
          </div>

          <p className="text-base mb-6 max-w-md text-white/90 leading-relaxed text-justify">
            Transformo ideias em soluções digitais inovadoras com código limpo,
            design responsivo e performance excepcional.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg text-center outline-none cursor-pointer"
            >
              Ver Projetos
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-5 py-2.5 rounded-lg outline-none cursor-pointer font-medium hover:bg-white hover:text-blue-900 transition-colors text-center"
            >
              Contato
            </button>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center animate-fadeIn">
          <div className="relative">
            <img
              src={ImageHero}
              alt="Gabriel Henrique"
              className="w-60 h-70 md:w-78 md:h-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
