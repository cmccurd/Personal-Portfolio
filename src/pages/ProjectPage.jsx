import { useParams } from "react-router-dom";
import Project from "../components/Project";
import projects from "../data/projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-white text-center py-20">Project not found.</div>;

  return (
    <Project
      title={project.title}
      description={project.description}
      images={project.images}
    />
  );
};

export default ProjectPage;
