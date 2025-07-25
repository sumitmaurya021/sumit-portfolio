import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I am a <strong>23-year-old Full-Stack Developer</strong> with 1 year of experience
        in <strong>ReactJS</strong> and <strong>Ruby on Rails</strong>. I’ve worked on several projects
        including <em>Interns Management System</em> and <em>Society Management System</em>. I'm passionate
        about clean code, modern UI, and delivering real-world web solutions.
      </motion.p>
    </section>
  );
}

export default About;
