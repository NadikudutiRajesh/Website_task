import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom styles for pagination and navigation overrides
// You can also put this in a separate CSS file or use styled-components
const styles = {
    slideContainer: {
        paddingBottom: "50px", // space for pagination
    },
    card: {
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        transition: "transform 0.3s ease",
        height: "400px",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        padding: "20px",
        color: "#fff",
        textAlign: "left",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "5px",
        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    },
    price: {
        fontSize: "1rem",
        color: "#ffd600",
        fontWeight: "500",
    },
};

const DestinationCarousel = ({ destinations }) => {
    return (
        <div className="destination-carousel-container">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 30, // slight rotation for 3D feel
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ padding: "40px 0" }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                {destinations.map((dest) => (
                    <SwiperSlide key={dest.id} style={{ width: "300px", height: "400px" }}>
                        <div style={styles.card} className="destination-card">
                            <img src={dest.img} alt={dest.title} style={styles.image} />
                            <div style={styles.overlay}>
                                <h3 style={styles.title}>{dest.title}</h3>
                                <p style={styles.price}>Starts from $110 - $225</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
        .swiper-pagination-bullet-active {
            background-color: #ffd600 !important;
        }
        .swiper-button-next, .swiper-button-prev {
            color: #fff !important;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .swiper-slide {
            transition: all 0.3s;
        }
        /* Optional: Start small and grow when active */
        .swiper-slide:not(.swiper-slide-active) {
            transform: scale(0.9);
            opacity: 0.8;
        }
      `}</style>
        </div>
    );
};

export default DestinationCarousel;
