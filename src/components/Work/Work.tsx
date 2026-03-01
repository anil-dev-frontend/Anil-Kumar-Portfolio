import { useState } from "react";
import { projects } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./work-swiper.css";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  webapp: string;
}

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[12vw] font-sans"
    >
      {/* ===== Title ===== */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on
        </p>
      </div>

      {/* ===== Carousel ===== */}
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          grabCursor
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            dynamicBullets: true,
            dynamicMainBullets: 2,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="project-swiper"
        >
          {projects.map((project: Project) => (
            <SwiperSlide key={project.id} className="project-slide">
              <div
                className="project-card cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#251f38] text-purple-500 text-xs px-2 py-1 mr-2 mb-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== DOTS ===== */}
        <div className="custom-pagination-wrapper">
          <div className="custom-pagination" />
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 rounded-xl max-w-3xl w-full relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-500"
            >
              &times;
            </button>

            <div className="p-6 lg:p-8">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6 object-contain"
              />

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-purple-500 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-center font-semibold transition"
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}