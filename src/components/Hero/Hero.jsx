import "./Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../../assets/projects/hend.png";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hello"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hend Mohamed
        </motion.h1>

        <h2 className="hero-title">
          <Typewriter
            words={[
              "Front-End Developer",
              "React Developer",
              "JavaScript Developer",
              "UI Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h2>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I build responsive and modern web applications using React.js,
          JavaScript, HTML, CSS, and REST APIs.
        </motion.p>

        <div className="buttons">

          <a href="/Hend-CV.pdf" download>
            <button className="btn">
              Download CV
            </button>
          </a>

          <a href="#projects">
            <button className="btn-outline">
              My Projects
            </button>
          </a>

        </div>

        <div className="icons">

          <a
            href="https://github.com/hend-mohamed1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/hend-mohamed-baa50338a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <img
          src={heroImage}
          alt="Hend Mohamed"
        />
      </motion.div>

    </section>
  );
}