import React, { useState , useEffect} from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    AOS.init()
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Status for success/error message
  const [alertVisible, setAlertVisible] = useState(false); // Toggle for alert visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kezgwvo", // Replace with your EmailJS service ID
        "template_643v0ey", // Replace with your EmailJS template ID
        formData,
        "BIAeAVh_PW4OeLfPu" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setAlertVisible(true); // Show alert
          setTimeout(() => setAlertVisible(false), 3000); // Auto-hide alert after 3 seconds
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          setAlertVisible(true); // Show alert
          setTimeout(() => setAlertVisible(false), 3000); // Auto-hide alert after 3 seconds
        }
      );
  };

  return (<div  id="Contact">
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      {alertVisible && (
        <div className={`alert ${status.includes("successfully") ? "success" : "error"}`}>
          {status}
        </div>
      )}

      <form onSubmit={sendEmail} data-aos="zoom-in" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div></div>
  );
};

export default Contact;
