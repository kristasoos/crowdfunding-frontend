import React from "react";

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Crowdfunding Page</h1>
      <p className="about-content">
        This crowdfunding page is dedicated to empowering women through
        creativity, learning, and community. By contributing, you’re helping
        women gain access to resources, workshops, and opportunities that foster
        confidence, independence, and skill-building in areas like art, writing,
        technology, and entrepreneurship. Every donation—big or small—helps
        create a space where women can learn, grow, and share their voices with
        the world. Together, we can support women in building brighter, more
        inspired futures.
      </p>
      <img
        className="about-image"
        src="https://images.unsplash.com/photo-1528129550655-5123a0cd0c4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
        alt="About Us"
      />{" "}
    </div>
  );
}

export default AboutPage;
