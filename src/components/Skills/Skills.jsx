import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaRoute,
  FaServer,
  FaMobileAlt,
  FaFigma,
  FaNpm,
} from "react-icons/fa";
import { SiFramer } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaRoute />, name: "React Router" },
    { icon: <FaServer />, name: "REST API" },
    { icon: <FaMobileAlt />, name: "Responsive Design" },
    { icon: <SiFramer />, name: "Framer Motion" },
    { icon: <FaNpm />, name: "npm" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <section className="skills" id="skills">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}

      </div>

    </section>
  );
}