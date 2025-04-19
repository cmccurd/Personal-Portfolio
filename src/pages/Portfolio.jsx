import { Link } from "react-router-dom";
import projects from "../data/projects";

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 sm:px-10">
      <section className="relative flex flex-col gap-12 lg:flex-row items-stretch mb-24 mx-auto">
        {/* Text (left side) */}
        <div
          className="z-10 text-center px-6 sm:px-10 lg:w-1/2 flex flex-col justify-center items-center rounded-3xl"
          style={{
            background: 'linear-gradient(to bottom, #1f2937 0%, #000000 80%, #000000 100%)'
          }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold py-4 mb-4">My Work</h2>
          <p className="text-gray-400 text-lg max-w-md">
            Explore a collection of web projects built with performance, responsiveness, and elegant design in mind.
          </p>
        </div>


        {/* Image (right side) */}
        <div className="hidden lg:block w-full lg:w-1/2 h-auto overflow-hidden">
          <img
            src="/banner-image.webp"
            alt="Portfolio Banner"
            className="w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            to={`/portfolio/${project.slug}`}
            className="block group border border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-xl hover:border-white transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5 bg-gray-900">
              <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
