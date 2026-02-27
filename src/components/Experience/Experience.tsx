import { experiences } from "../../constants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wider">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my professional journey and roles
        </p>
      </div>

      {/* Grid Layout: Mobile me 1 column, Desktop me 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full max-w-[400px] h-full"
          >
            {/* Experience Card */}
            <div
              className="h-full p-6 rounded-2xl border border-white/20 bg-gray-900/80 backdrop-blur-md 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50"
            >
              {/* Header: Logo and Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-lg overflow-hidden shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-lg font-bold text-white truncate">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-purple-400 font-medium truncate">
                    {experience.company}
                  </h4>
                  <span className="text-[11px] text-gray-500 mt-1">{experience.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {experience.desc}
              </p>

              {/* Skills Tags */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <h5 className="font-semibold text-white text-[11px] mb-3 uppercase tracking-tighter">Tech Stack:</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec]/10 text-purple-300 px-2.5 py-1 text-[10px] font-medium rounded-md border border-purple-500/20"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}