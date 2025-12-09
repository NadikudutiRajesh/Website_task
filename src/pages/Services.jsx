import React from "react";
import DestinationCarousel from "../components/DestinationCarousel";


const features = [
    { title: "Corporate Tours", desc: "Customized corporate travel and retreats.", icon: "💼" },
    { title: "Family Packages", desc: "Fun itineraries for families and kids.", icon: "👨‍👩‍👧‍👦" },
    { title: "Private Getaways", desc: "Secluded resorts and private experiences.", icon: "🛶" },
    { title: "Spiritual Tours", desc: "Pilgrimages and mindful retreats.", icon: "🕉️" },
];

const stats = [
    { icon: "🌍", number: "2K+", label: "Destinations" },
    { icon: "🧳", number: "470+", label: "Curated Packages" },
    { icon: "🏢", number: "25+", label: "Worldwide Branches" },
    { icon: "✈️", number: "30+", label: "International Trips" },
    { icon: "😊", number: "18K", label: "Happy Customers" },
    { icon: "📚", number: "50+", label: "Multilingual Guides" },
];

const destinations = [
    {
        id: 1,
        title: "Australia",
        img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 2,
        title: "Switzerland",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 3,
        title: "Thailand",
        img: "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 4,
        title: "Korea",
        img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 5,
        title: "Bali, Indonesia",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFsaSUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 6,
        title: "Paris, France",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 7,
        title: "Dubai, UAE",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 8,
        title: "Singapore",
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 9,
        title: "Maldives",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 10,
        title: "New York, USA",
        img: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    },
];


function Services() {
    return (
        <div className="services-page bg-white">
            {/* HERO + FEATURE CARDS */}
            <section className="services-hero py-5">
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Left text */}
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="row g-3">
                                {features.map((f, i) => (
                                    <div key={f.title} className="col-sm-6" data-aos="zoom-in" data-aos-delay={i * 100}>
                                        <div
                                            className="card feature-card h-100 border-0 shadow-sm bag-primary"
                                        >
                                            <div className="card-body d-flex ">
                                                <div className="feature-icon me-3 flex-shrink-0">
                                                    <span className="fs-3">{f.icon}</span>
                                                </div>
                                                <div>
                                                    <h5 className="fw-semibold mb-1 text-white">{f.title}</h5>
                                                    <p className="mb-0 small text-white">{f.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Right feature grid */}
                        <div className="col-lg-6 order-2 order-lg-1">
                            <p className="text-uppercase text-primary fw-semibold small mb-2">
                                Come Explore The World With Us
                            </p>
                            <h1 className="fw-bold display-5 mb-3">
                                Get Ready For An Exciting Adventure!
                            </h1>
                            <p className="text-muted mb-4">
                                Travel isn&apos;t just about seeing new places — it&apos;s about
                                experiences, memories and stories you take home. We design journeys
                                for every kind of traveler: families, couples, solo explorers and groups.
                            </p>
                            <button className="btn btn-warning btn-lg px-4 fw-semibold shadow-sm custom-radius" style={{ borderRadius: "5px 5px 20px 5px" }}>
                                Book a Tour
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS ROW (yellow-ish strip in Figma) */}
            <section className="services-stats py-4">
                <div className="container">
                    <div className="row text-center g-4 justify-content-center">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className="col-6 col-md-4 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div
                                    className="stat-card"
                                >
                                    <div className="fs-3 mb-1">{s.icon}</div>
                                    <div className="fw-bold fs-4">{s.number}</div>
                                    <div className="small text-muted">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-destinations py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <p
                            style={{
                                textTransform: "uppercase",
                                fontSize: 12,
                                letterSpacing: 1.5,
                                fontWeight: 500,
                                color: "#1F5E99",
                                marginBottom: 12,
                            }}
                        >
                            Destinations Around The Globe
                        </p>
                        <h2
                            style={{
                                fontWeight: 700,
                                fontSize: 42,
                                color: "#000",
                                marginBottom: 0,
                            }}
                        >
                            Discover Stunning Destinations
                        </h2>
                    </div>

                    {/* Carousel */}
                    <div style={{ marginBottom: 32 }}>
                        <DestinationCarousel destinations={destinations} />
                    </div>

                    <div className="text-center">
                        <button
                            style={{
                                background: "#FFD600",
                                color: "#000",
                                border: "none",
                                borderRadius: "5px 5px 20px 5px",
                                padding: "12px 32px",
                                fontSize: 15,
                                fontWeight: 600,
                                cursor: "pointer",
                                boxShadow: "0 4px 12px rgba(255, 214, 0, 0.3)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
                            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
                        >
                            Explore All Destinations
                        </button>
                    </div>
                </div>
            </section>


            {/* EMI / PROMO */}
            <section className="services-emi py-5" style={{ background: '#f5f5f5' }}>
                <div className="container">
                    <div className="row align-items-center g-5" style={{ minHeight: 280 }}>
                        {/* Left: Star Badge */}
                        <div className="col-lg-2 d-flex justify-content-center">
                            <div style={{ position: 'relative', width: 180, height: 180 }}>
                                {/* Yellow star background */}
                                <svg viewBox="0 0 200 200" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                                    {/* Large yellow star */}
                                    <polygon points="100,20 130,90 205,90 150,140 180,210 100,160 20,210 50,140 -5,90 70,90" fill="#FFD600" />
                                    {/* Black triangle for EMI badge */}
                                    <polygon points="100,120 60,200 140,200" fill="#000" />
                                </svg>
                                {/* EMI Text */}
                                <div style={{
                                    position: 'absolute',
                                    top: '55%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center',
                                    zIndex: 10,
                                }}>
                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>EMI</div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 2 }}>Options</div>
                                </div>
                            </div>
                        </div>

                        {/* Center: Content */}
                        <div className="col-lg-5">
                            <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: '#000' }}>
                                Affordable Trips with EMI
                            </h3>
                            <p style={{ fontSize: 15, color: '#333', marginBottom: 16, lineHeight: 1.5 }}>
                                Dreams shouldn&apos;t wait for bank balances. We offer easy EMI plans on select packages, letting you travel now and pay in comfortable installments.
                            </p>
                            <div style={{ fontSize: 14, color: '#333', lineHeight: 1.8 }}>
                                <div style={{ marginBottom: 8 }}>• <strong>Low-interest monthly payments</strong></div>
                                <div style={{ marginBottom: 8 }}>• <strong>Flexible duration plans</strong></div>
                                <div style={{ marginBottom: 8 }}>• <strong>Debit/credit card EMI & partner financing</strong></div>
                                <div>• <strong>Available for both domestic and international trips</strong></div>
                            </div>
                        </div>

                        {/* Right: Let's Go Travel Bubble */}
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div style={{
                                position: 'relative',
                                width: 240,
                                height: 200,
                                background: '#1F5E99',
                                borderRadius: '50% 50% 50% 0',
                                transform: 'rotate(-45deg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                            }}>
                                {/* Inner content rotated back */}
                                <div style={{
                                    transform: 'rotate(45deg)',
                                    textAlign: 'center',
                                    color: '#fff',
                                    zIndex: 2,
                                }}>
                                    <div style={{ fontSize: 18, fontWeight: 400, marginBottom: 2 }}>
                                        Let&apos;s Go
                                    </div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: '#FFD600', lineHeight: 1 }}>
                                        Travel
                                    </div>
                                </div>
                                {/* Dotted border effect (SVG overlay) */}
                                <svg style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                }} viewBox="0 0 240 200" preserveAspectRatio="none">
                                    <path
                                        d="M 50 20 Q 120 10 170 50"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="5,5"
                                        opacity="0.6"
                                    />
                                    <circle cx="180" cy="40" r="3" fill="#FFD600" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section
                className="services-testimonials py-5 position-relative"
                style={{
                    background: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop') center/cover no-repeat`,
                    minHeight: '540px',
                    color: '#fff',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(24, 54, 87, 0.68)',
                        zIndex: 1,
                    }}
                ></div>
                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="text-center mb-2" style={{ marginTop: 32 }}>
                        <div style={{
                            textTransform: 'uppercase',
                            fontSize: 13,
                            letterSpacing: 2,
                            fontWeight: 500,
                            color: '#e0e6ed',
                            marginBottom: 10,
                        }}>
                            READ TRAVEL LOVERS EXPERIENCES
                        </div>
                        <h2 style={{
                            fontWeight: 700,
                            fontSize: 40,
                            lineHeight: 1.1,
                            marginBottom: 30,
                        }}>
                            Hear From Our Happy Customers
                        </h2>
                    </div>
                    <div className="row justify-content-center" style={{ gap: 32 }}>
                        {/* Testimonial 1 */}
                        <div className="col-md-5 d-flex flex-column align-items-start" style={{ maxWidth: 420 }}>
                            <div style={{ marginBottom: 18 }}>
                                {/* Stars */}
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#FFD600" style={{ marginRight: 2 }}>
                                        <polygon points="10,1 12.59,7.36 19.51,7.64 14.25,12.14 15.91,19.02 10,15.5 4.09,19.02 5.75,12.14 0.49,7.64 7.41,7.36" />
                                    </svg>
                                ))}
                            </div>
                            <div style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 18, color: '#fff' }}>
                                "Krivam made our family vacation completely stress-free. Everything was perfectly planned from travel to stay. It was our smoothest and most memorable trip ever!"
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="John"
                                    style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginRight: 14, border: '2px solid #fff' }}
                                />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>John</div>
                                    <div style={{ fontSize: 14, color: '#e0e6ed' }}>Spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="col-md-5 d-flex flex-column align-items-start" style={{ maxWidth: 420 }}>
                            <div style={{ marginBottom: 18 }}>
                                {/* Stars */}
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="#FFD600" style={{ marginRight: 2 }}>
                                        <polygon points="10,1 12.59,7.36 19.51,7.64 14.25,12.14 15.91,19.02 10,15.5 4.09,19.02 5.75,12.14 0.49,7.64 7.41,7.36" />
                                    </svg>
                                ))}
                            </div>
                            <div style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 18, color: '#fff' }}>
                                "Our business trip was handled with great professionalism. The team organized everything on time and within budget. We could focus on our work while they managed the rest."
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/65.jpg"
                                    alt="Kumar"
                                    style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', marginRight: 14, border: '2px solid #fff' }}
                                />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>Kumar</div>
                                    <div style={{ fontSize: 14, color: '#e0e6ed' }}>India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
