import React from "react";
import Layout from "../../components/Layout/Layout";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page mobile-view visible-lg overflow-x-hidden d-flex justify-content-center">
        <div className="contact-container d-flex flex-column w-100 justify-content-center align-items-center ">
          <form
            action=""
            className="form-container d-flex flex-column justify-content-center gap-3 w-75"
          >
            <p>Contact Me👍</p>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control "
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control "
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
              ></textarea>
            </div>
            <input
              type="button"
              value="Submit"
              className="btn btn-outline-danger   p-3"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
