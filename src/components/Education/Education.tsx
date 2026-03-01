import { education } from "../../constants";

interface EducationItem {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* ===== Section Title ===== */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* ===== Education Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {education.map((edu: EducationItem) => (
          <div
            key={edu.id}
            className="relative p-8 rounded-2xl border border-white/10 bg-gray-900
              shadow-[0_0_25px_rgba(130,69,236,0.25)]
              transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/40"
          >
            {/* ===== Logo ===== */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>

            {/* ===== Degree ===== */}
            <h3 className="text-xl font-semibold text-white text-center">
              {edu.degree}
            </h3>

            {/* ===== School ===== */}
            <p className="text-gray-300 text-sm text-center mt-2 leading-snug">
              {edu.school}
            </p>

            {/* ===== Date ===== */}
            <p className="text-gray-500 text-sm text-center mt-1">
              {edu.date}
            </p>

            {/* ===== Divider ===== */}
            <div className="w-16 h-[2px] bg-purple-500 mx-auto my-4"></div>

            {/* ===== Grade ===== */}
            <p className="text-gray-300 font-semibold text-center">
              Grade: {edu.grade}
            </p>

            {/* ===== Description ===== */}
            <p className="mt-4 text-gray-400 text-sm text-center leading-relaxed line-clamp-5">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}