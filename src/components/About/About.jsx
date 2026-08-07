import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I'm a passionate Front-End Developer and a fresh graduate from the
        Faculty of Computers and Information, Zagazig University. I enjoy
        creating responsive, modern, and user-friendly web applications using
        React.js, JavaScript, HTML, CSS, and REST APIs. I'm always eager to
        learn new technologies, improve my skills, and build real-world
        projects.
      </motion.p>

      <div className="about-cards">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FaGraduationCap />
          <h3>Education</h3>
          <p>Faculty of Computers & Information</p>
          <p>Zagazig University</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaLaptopCode />
          <h3>Specialization</h3>
          <p>Front-End Development</p>
          <p>React.js</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaCode />
          <h3>Projects</h3>
          <p>5+ Completed Projects</p>
          <p>Responsive Web Apps</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaLightbulb />
          <h3>Goal</h3>
          <p>Looking for a Front-End</p>
          <p>Developer Opportunity</p>
        </motion.div>

      </div>

    </section>
  );
}