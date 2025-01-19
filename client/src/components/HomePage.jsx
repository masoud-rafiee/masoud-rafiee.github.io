import React from "react";
import Weather from "./Weather";
import DateTime from "./DateTime";
import ContactInfo from "./ContactInfo";

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <img src="images/profile.jpg" alt="Masoud Rafiee" className="profile-img" />
          <h1>Masoud Rafiee</h1>
          <p>INTJ-A | AI Enthusiast | Computer Science Student</p>
          <p>Building the future of AI, neuroimaging, robotics, and space exploration.</p>
        </div>
      </section>
      <section className="info-section">
        <Weather />
        <DateTime />
      </section>
      <ContactInfo />
    </div>
  );
}

export default HomePage;
