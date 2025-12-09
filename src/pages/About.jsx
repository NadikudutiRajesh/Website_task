import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-image-section">
          <div className="about-icon" data-aos="zoom-in">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#0066cc" strokeWidth="2" />
              <path d="M12 6v6m3-3H9" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="about-image-placeholder slide-right" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" alt="Team Member" />
          </div>
        </div>

        <div className="about-content">
          <p className="about-subtitle" data-aos="fade-down">MEET THE PEOPLE WHO PLAN YOUR ADVENTURES</p>
          <h1 data-aos="fade-up">About Us</h1>

          <p className="about-intro" data-aos="fade-up" data-aos-delay="100">
            At KRIVAM Digitech Global Solutions, we believe possibilities are limitless when
            technology, innovation, and human potential converge. Founded on resilience and
            driven by purpose, we are much more than a solutions company, we are a partner
            in transformation. From local communities to global enterprises.
          </p>

          <p className="about-intro" data-aos="fade-up" data-aos-delay="200">
            Our team of passionate innovators and skilled professionals works closely with
            clients to understand their vision, turning challenges into opportunities through
            smart, scalable, and secure technology. With a commitment to quality, creativity,
            and customer satisfaction, we empower businesses to stay ahead in an ever-evolving digital world.
          </p>

          <button className="btn btn-know-more" data-aos="zoom-in" data-aos-delay="300">Know More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
