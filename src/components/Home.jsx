import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import banner_image from "../assets/Images/banner_image.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      {/* Hero Banner */}
      <div className="image-container">
        <img src={banner_image} alt="Banner" />
        <motion.div
          className="overlay-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to My Portfolio</h1>
          <p>Turning Ideas into Real-Time Web Applications</p>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>
            Hi, I'm <span className="highlight">Sumit Maurya</span> 👋
          </h2>
          <p>
            I’m a <strong>23-year-old Full-Stack Developer</strong> from India with 1 year of
            hands-on experience in building scalable apps using <strong>ReactJS</strong> and
            <strong> Ruby on Rails</strong>. I specialize in building beautiful, functional,
            and user-friendly interfaces.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Sumit Maurya"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
