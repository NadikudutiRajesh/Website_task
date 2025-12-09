import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Packages from './Packages';

function Home() {
    const categories = [
        { id: 1, name: 'Adventure', title: '01.Adventure' },
        { id: 2, name: 'Vacations', title: '02.Vacations' },
        { id: 3, name: 'Hills Station', title: '03.Hills Station' },
        { id: 4, name: 'Seasonal', title: '04.Seasonal' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section with Background */}
            <section className="hero-section ">
                <div className="hero-overlay"></div>
                <div>
                    <div className="hero-content-wrapper">
                        <p className="hero-subtitle" data-aos="fade-down">PACKAGE FOR BUDGET SEEKERS</p>
                        <h1 data-aos="fade-up">Travel Beyond Boundaries</h1>
                        <h2 data-aos="fade-up" data-aos-delay="100">Earn Beyond Limits</h2>
                        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
                            Travel's about experiences and memories.<br />
                            Share yours and making a fortune on every trip...
                        </p>

                        {/* Hero Images Grid */}
                        <div className="hero-images">
                            <div className="hero-img" data-aos="fade-up" data-aos-delay="200">
                                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=180&fit=crop" alt="Mountain" />
                            </div>
                            <div className="hero-img" data-aos="fade-up" data-aos-delay="300">
                                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=250&h=180&fit=crop" alt="Hiking" />
                            </div>
                            <div className="hero-img" data-aos="fade-up" data-aos-delay="400">
                                <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=250&h=180&fit=crop" alt="Snow" />
                            </div>
                        </div>

                        <button className="btn btn-explore" data-aos="zoom-in" data-aos-delay="500">Explore More</button>
                    </div>
                </div>
                <div className='categories-tabs'>
                    <div className="categories-container hero-content-wrapper mt-4">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                className={`category-tab ${cat.id === 1 ? 'active' : 'text-dark'}`}
                                data-aos="fade-right"
                                data-aos-delay={index * 100}
                            >
                                <span className="category-label">{cat.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Packages />
            <Contact />
        </div>
    );
}

export default Home;
