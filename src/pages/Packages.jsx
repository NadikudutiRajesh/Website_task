import React from 'react';

function Packages() {
  const packages = [
    { id: 1, title: 'Budget Saver', price: '$299', features: ['3 Nights', 'Breakfast Included', 'Free Transfers'] },
    { id: 2, title: 'Premium', price: '$799', features: ['7 Nights', 'All Meals', 'Guided Tours'], popular: true },
    { id: 3, title: 'Luxury', price: '$1,999', features: ['All Inclusive', 'Private Guide', 'Airport Lounge'] }
  ];

  return (
    <div className="packages-page">
      <section className="packages-hero">
        <div className="packages-hero-inner">
          <h2>Travel Beyond Boundaries</h2>
          <p>Choose a package that fits your style and budget.</p>
        </div>
      </section>

      <section className="packages-grid-section">
        <div className="packages-grid">
          {packages.map((p, index) => (
            <div
              key={p.id}
              className={`package-card ${p.popular ? 'popular' : ''}`}
              data-aos="flip-left"
              data-aos-delay={index * 150}
            >
              {p.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{p.title}</h3>
              <div className="package-price">{p.price}</div>
              <ul className="features">
                {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packages;
