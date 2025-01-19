import React from "react";
import Weather from "./Weather";
import DateTime from "./DateTime";
import ContactInfo from "./ContactInfo";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="images/profile.jpg"
            alt="Masoud Rafiee"
            className="profile-img"
          />
          <h1 className="hero-title">Masoud Rafiee</h1>
          <p className="hero-description">
            INTJ-A | AI Enthusiast | Computer Science Student
          </p>
          <p className="hero-subtext">
            Dedicated to building futuristic solutions in AI, neuroimaging,
            robotics, and space exploration.
          </p>
        </div>
        {/* Animated Background */}
        <div className="hero-bg">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </section>

      {/* Weather and DateTime Section */}
      <section className="info-section">
        <Weather />
        <DateTime />
      </section>

      {/* Contact Info */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <ContactInfo />
      </section>
    </div>
  );
}

export default HomePage;
