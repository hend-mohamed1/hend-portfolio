import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        I'm currently looking for Front-End Developer opportunities.
        Feel free to contact me through any of the following platforms.
      </motion.p>

      <div className="contact-cards">

        <motion.a
          href="mailto:hendmohamed8860@gmail.com"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <FaEnvelope />
          <h3>Email</h3>
          <p>hendmohamed8860@gmail.com</p>
        </motion.a>

        <motion.a
          href="https://github.com/hend-mohamed1"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaGithub />
          <h3>GitHub</h3>
          <p>github.com/hend-mohamed1</p>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/hend-mohamed-baa50338a/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>Connect with me</p>
        </motion.a>

      </div>

    </section>
  );
}