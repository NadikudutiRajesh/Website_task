import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page" style={{ background: "#fff" }}>
      {/* CONTACT - Figma pixel-perfect */}
      <section
        className="contact-section"
        style={{ padding: "60px 20px", background: "#fff" }}
      >
        <div
          className="container"
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          {/* Header */}
          <div style={{ marginBottom: 48 }} data-aos="fade-down">
            <div
              style={{
                textTransform: "uppercase",
                fontSize: 12,
                letterSpacing: 1.5,
                fontWeight: 500,
                color: "#333",
                marginBottom: 12,
              }}
            >
              CONTACT
            </div>
            <h2
              style={{
                fontWeight: 700,
                fontSize: 48,
                color: "#000",
                marginBottom: 0,
              }}
            >
              Lets Stay Connected
            </h2>
          </div>

          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Left: Contact Info Cards */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: 28 }}
            >
              {/* Address Card */}
              <div
                style={{
                  padding: "32px 24px",
                  border: "1px solid #e0e0e0",
                  borderRadius: 12,
                  textAlign: "center",
                  background: "#fafafa",
                }}
                data-aos="fade-right"
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    margin: "0 auto 16px",
                    border: "2px solid #666",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1C7.6 1 4 4.6 4 9c0 6 8 13 8 13s8-7 8-13c0-4.4-3.6-8-8-8z"
                      stroke="#666"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="12" cy="9" r="2" fill="#666" />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#333",
                    marginBottom: 12,
                  }}
                >
                  Address
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  BN 447, 2nd Floor, Balaram Nagar,
                  <br />
                  Safiguda, Hyderabad-500047
                </p>
              </div>

              {/* Call & Email Row */}
              <div className="contact-info-row">
                {/* Call Card */}
                <div
                  style={{
                    padding: "32px 24px",
                    border: "1px solid #e0e0e0",
                    borderRadius: 12,
                    textAlign: "center",
                    background: "#fafafa",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      margin: "0 auto 16px",
                      border: "2px solid #666",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 6h8l2-2h0l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                        stroke="#666"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#333",
                      marginBottom: 12,
                      width: "100%",
                    }}
                  >
                    Call us
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#666",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    +91 9999555349
                  </p>
                </div>

                {/* Email Card */}
                <div
                  style={{
                    padding: "32px 24px",
                    border: "1px solid #e0e0e0",
                    borderRadius: 12,
                    textAlign: "center",
                    background: "#fafafa",
                  }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      margin: "0 auto 16px",
                      border: "2px solid #666",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                        stroke="#666"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M22 6L12 13 2 6"
                        stroke="#666"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#333",
                      marginBottom: 12,
                      width: "100%",
                    }}
                  >
                    Email us
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#666", // Fixed color
                      margin: 0,
                      fontWeight: 500,
                      wordBreak: "break-all"
                    }}
                  >
                    hr@krivamsdigitech.in
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              style={{
                padding: "32px",
                border: "1px solid #e0e0e0",
                borderRadius: 12,
                background: "#fafafa",
              }}
              data-aos="fade-left"
            >
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {/* Name & Email Row */}
                <div className="contact-form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px 14px",
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      fontSize: 13,
                      background: "#fff",
                      fontFamily: "inherit",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px 14px",
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      fontSize: 13,
                      background: "#fff",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    fontSize: 13,
                    background: "#fff",
                    fontFamily: "inherit",
                    minHeight: 120,
                    resize: "vertical",
                  }}
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: "#FFD600",
                    color: "#000",
                    border: "none",
                    borderRadius: "5px 5px 20px 5px",
                    padding: "12px 28px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    alignSelf: "flex-start",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
