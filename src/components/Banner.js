import React from "react";
import "./Banner.css";

const Banner = () => {
  const banners = [
    {
      title: "Bakery Products",
      discount: "Up to 15% OFF",
      image: "cbakery.jpg",
    },
    { title: "Tea", discount: "Up to 10% OFF", image: "tea.jpg" },
    {
      title: "Utensils/Equipment and Machinery",
      discount: "Up to 10% OFF",
      image: "utensils.jpg",
    },
  ];

  return (
    <div className="banner">
      {banners.map((banner, index) => (
        <div key={index} className="banner-item">
          <img src={banner.image} alt={banner.title} />
          <div className="banner-info">
            <h3>{banner.title}</h3>
            <p>{banner.discount}</p>
            <button>Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
