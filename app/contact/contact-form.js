"use client";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setErrors({});

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submission
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message || "Message sent successfully!");
      e.target.reset(); // reset form
    } catch (err) {
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-page py-130 rpy-100">
      <div className="container">
        <div className="row gap-100 align-items-center">
          {/* Left side */}
          <div className="col-lg-5">
            <div className="contact-info-part">
              <div className="section-title mb-50">
                <h2>Feel Free to Contact Us, Get In Touch</h2>
                <p>
                  We're here to assist you in any way we can. Whether you have
                  questions, feedback, or just want to say hello.
                </p>
              </div>

              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  <span className="title">Office Location</span>
                  <span className="text">
                    Askshaya Adora Block A-1, Flat-105, Rajiv Gandhi Salai (OMR)
                    Padur, Chennai-603103
                  </span>
                </div>
              </div>

              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="far fa-envelope-open-text" />
                </div>
                <div className="content">
                  <span className="title">Email Us</span>
                  <span className="text">
                    <a href="mailto:hr@infinityglobaltech.net">
                      hr@infinityglobaltech.net
                    </a>
                  </span>
                </div>
              </div>

              <div className="contact-info-item style-two">
                <div className="icon">
                  <i className="fal fa-phone-volume" />
                </div>
                <div className="content">
                  <span className="title">Call Us</span>
                  <span className="text">
                    <a href="tel:918925899559">+91-89258 99559</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side (Form) */}
          <div className="col-lg-7">
            <div className="contact-form br-10 bgc-lighter rmt-60">
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <h5>Send Us Message</h5>
                <p>
                  Questions or you would just like to say hello, contact us.
                </p>

                <div className="row mt-30">
                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter your mobile number"
                      />
                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Us Message"}
                      </button>
                    </div>
                    {status && (
                      <p className="mt-3 text-primary text-end">{status}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
