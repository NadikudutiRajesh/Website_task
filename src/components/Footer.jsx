import React, { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks — you've been subscribed with ${email}`);
        setEmail("");
    };

    const styles = {
        footerWrapper: {
            background: "linear-gradient(90deg,#00263a 0%, #00354a 100%)",
            color: "#cfeefc",
            //   padding: "48px 0px",
            position: "relative",
            overflow: "hidden",
        },
        leftImage: { width: "600px", display: "block", height: "100%" },
        footerBlob: {
            position: "absolute",
            left: 20,
            //   bottom: -40,
            width: 100,
            height: 140,
        },
        newsletterTitle: { color: "#e6f7ff", fontSize: 26, lineHeight: 1.12, margin: 0 },
        input: { flex: 1, padding: "12px 14px", borderRadius: 6, border: "none", fontSize: 14 },
        submit: {
            background: "linear-gradient(135deg,#ffcf00 0%, #ffb703 100%)",
            border: "none",
            padding: "12px 20px",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "5px 5px 20px 5px",
        },
        linksGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 22 },
        footerWatermark: {
            position: "absolute",
            right: 20,
            bottom: 12,
            fontSize: 120,
            color: "rgba(255,255,255,0.03)",
            fontWeight: 800,
            letterSpacing: 8,
            pointerEvents: "none",
        },
    };

    return (
        <footer style={styles.footerWrapper}>
            <div className="d-flex flex-column flex-lg-row">
                <div style={{ position: "relative" }} className="me-3 footer-left-image" >
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop"
                        alt="Travel by boat"
                        style={styles.leftImage}
                        className="d-none d-lg-block"
                    />
                </div>
                <div className="d-flex mt-4 w-100 justify-content-center">
                    <div style={styles.grid} className="mx-3 w-100" >


                        <div>
                            <p style={{ textTransform: "uppercase", fontWeight: 700, color: "#cfeefc", marginBottom: 6, opacity: 0.9 }}>
                                Our Newsletter
                            </p>
                            <h2 style={styles.newsletterTitle}>Sign Up To Stay Ahead With The Latest Updates And New Exciting Deals!</h2>

                            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                <input
                                    type="email"
                                    required
                                    placeholder="Your Email id"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                />
                                <button type="submit" style={styles.submit}>
                                    Submit
                                </button>
                            </form>

                            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(230,247,255,0.8)" }}>
                                By entering the email you accept the{" "}
                                <a href="#terms" style={{ color: "#cfeefc", textDecoration: "underline" }}>
                                    terms &amp; conditions
                                </a>
                                .
                            </div>

                            <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.06)", margin: "20px 0" }} />
                            <div className="border-bottom border-2"></div>

                            <div className="border-bottom border-2"></div>

                            <div style={styles.linksGrid} className="footer-links-grid">
                                <div>
                                    <h6 style={{ color: "#ffc107", marginBottom: 8 }}>Menu</h6>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 style={{ color: "#ffc107", marginBottom: 8 }}>Services</h6>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Family Packages
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Private Getaways
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                                Spiritual Tours
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 style={{ color: "#ffc107", marginBottom: 8 }}>Contact</h6>
                                    <address style={{ color: "#cfeefc", fontStyle: "normal", lineHeight: 1.6 }}>
                                        BN 447, BalaNagar,
                                        <br /> Hyderabad-500047
                                        <br />
                                        <a href="mailto:krivamdigitech@gmail.com" style={{ color: "#cfeefc" }}>
                                            krivamdigitech@gmail.com
                                        </a>
                                        <br />
                                        <a href="tel:+918454343849" style={{ color: "#cfeefc" }}>
                                            +91 84543 43849
                                        </a>
                                    </address>

                                    <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                                        <a href="#" aria-label="YouTube" style={{ display: "inline-block" }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.38.58A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12C4.4 20.5 12 20.5 12 20.5s7.6 0 9.38-.58A3 3 0 0 0 23.5 17.8 31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#" aria-label="Instagram" style={{ display: "inline-block" }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A4.9 4.9 0 1 0 16.9 13 4.9 4.9 0 0 0 12 8.1zm6.4-3.3a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </a>
                                        <a href="#" aria-label="LinkedIn" style={{ display: "inline-block" }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1A4.16 4.16 0 0 1 20 9.2V21h-4v-6.2c0-1.5 0-3.4-2.1-3.4S11.6 13 11.6 14.9V21H9z"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between my-2 text-center text-md-start gap-3">
                                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>© 2025 Krivamdigitech.in</div>
                                <div style={{ display: "flex", gap: 18 }}>
                                    <a href="#terms" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                        Terms of service
                                    </a>
                                    <a href="#privacy" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                        Privacy Policy
                                    </a>
                                    <a href="#cookies" style={{ color: "#cfeefc", textDecoration: "none" }}>
                                        Cookies
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.footerWatermark}>KRIVAM</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
