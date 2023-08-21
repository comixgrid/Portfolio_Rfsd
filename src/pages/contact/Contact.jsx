import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../contact/Contact.css";
import Jump from "react-reveal/Jump";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !message) {
        alert("Please fill all the fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/send-mail", {
        name,
        email,
        message,
      });
      if (res.data.message === "Email sent successfully") {
        alert("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("An error occurred while sending the email");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred while sending the email");
    }
  };

  return (
    <Layout>
      <div className="contact-page mobile-view visible-lg overflow-x-hidden d-flex justify-content-center">
        <div className="contact-container d-flex flex-column w-100 justify-content-center align-items-center ">
          <form
            onSubmit={handleSubmit}
            className="form-container d-flex flex-column justify-content-center gap-3 w-75 col-md-12"
          >
            <Jump>
              <p>Contact Me👍</p>
            </Jump>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="6"
                className="form-control p-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger p-3 fs-4 ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
