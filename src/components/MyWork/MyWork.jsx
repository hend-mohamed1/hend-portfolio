import "./MyWork.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import cafe from "../../assets/projects/cafe.png";
import skincare from "../../assets/projects/skincare.png";
import restaurant from "../../assets/projects/restaurant.png";
import store from "../../assets/projects/store.png";
import smartMedication from "../../assets/projects/smart-medication.png";

export default function MyWork() {
  const projects = [
    {
      title: "Smart Medication Assistant",
      description:
        "A React application for medication reminders, AI chat, OCR prescription upload, and adherence tracking.",
      image: smartMedication,
      github: "https://github.com/hend-mohamed1/smart-medication-frontend",
      tech: ["React", "JavaScript", "CSS"],
    },

    {
      title: "Cafe Website",
      description:
        "Responsive cafe website with a modern design and smooth user experience.",
      image: cafe,
      github: "https://github.com/hend-mohamed1/project-1",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "Skin Care Website",
      description:
        "Responsive landing page for skincare products with a clean UI.",
      image: skincare,
      github: "https://github.com/hend-mohamed1/project-2",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "Restaurant Website",
      description:
        "Restaurant website featuring menu sections and responsive design.",
      image: restaurant,
      github: "https://github.com/hend-mohamed1/project-3",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "E-Commerce Store",
      description:
        "Simple online store interface with product listing and responsive layout.",
      image: store,
      github: "https://github.com/hend-mohamed1/project-4",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="mywork" id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Work
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <a
                className="github-btn"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}