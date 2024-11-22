import React, { useState } from "react";
import "./TopPicks.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      image: "/image1.png",
      title: "High Voltage Bones Cups - 12 Count",
      brand: "HIGH VOLTAGE",
      price: "NPR. 733",
      rating: 4.5,
      reviews: 150,
    },
    {
      id: 2,
      image: "/image2.png",
      title: "High Voltage Bones Cups - 12 Count",
      brand: "VUXTA MACHINES",
      price: "NPR. 733",
      rating: 4.5,
      reviews: 150,
    },
    {
      id: 3,
      image: "/image3.png",
      title: "Ninja CFP307 Specialty Coffee System",
      brand: "NINJA TECH",
      price: "NPR. 733",
      rating: 4.7,
      reviews: 150,
    },
    {
      id: 4,
      image: "/image4.png",
      title: "Organic and Fair Trade Dark Roast Whole Bean",
      brand: "DEATH WISH COFFEE",
      price: "NPR. 733",
      rating: 4.8,
      reviews: 150,
    },
    {
      id: 5,
      image: "/image5.png",
      title: "Organic Matcha Fresh Tea Powder",
      brand: "ORGANIC MATCHA",
      price: "NPR. 733",
      rating: 4.6,
      reviews: 150,
    },
  ];

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="top-picks-container">
      <div className="top-picks-header">
        <h2>Top Picks</h2>
      </div>
      <div className="top-picks-items">
        {products.map((product) => (
          <div key={product.id} className="top-pick-item">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
              </div>
            </div>
            <div className="item-info">
              <p className="brand">{product.brand}</p>
              <h3>{product.title}</h3>

              <div className="rating">
                {"⭐️".repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && "½"}
                <span className="reviews">({product.reviews})</span>
                <p className="price">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
