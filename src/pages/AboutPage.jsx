import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Empowering women through creativity, learning, and community</p>
      </div>

      <div className="about-content-wrapper">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            This crowdfunding page is dedicated to empowering women through
            creativity, learning, and community. By contributing, you're helping
            women gain access to resources, workshops, and opportunities that
            foster confidence, independence, and skill-building in areas like
            art, writing, technology, and entrepreneurship.
          </p>
          <p>
            Every donation—big or small—helps create a space where women can
            learn, grow, and share their voices with the world. Together, we can
            support women in building brighter, more inspired futures.
          </p>
        </div>

        <div className="about-image-container">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="About Us"
          />
        </div>

        <div className="about-section">
          <h2>What We Believe</h2>
          <p>
            We believe in the power of community and the potential within every
            woman. Our platform provides not just financial support, but a
            network of encouragement and resources to help women achieve their
            goals.
          </p>
          <p>
            Whether it's learning a new skill, launching a business, or pursuing
            an artistic passion, we're here to support the journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
