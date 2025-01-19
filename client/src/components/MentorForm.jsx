import React, { useState } from "react";

function MentorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // You can integrate with a backend or API to handle submissions
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });

    // Optional: Add an alert or a confirmation message
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mentor-form">
      <h2>Mentor or Feedback Form</h2>
      <p>Help me improve by sharing your thoughts, suggestions, or mentoring advice!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          {submitted ? "Submitted ✅" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default MentorForm;
