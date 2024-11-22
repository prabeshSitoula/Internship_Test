import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Bakery", icon: "/icons/bakery.png" },
    { name: "Coffee", icon: "/icons/coffee.png" },
    { name: "Tea", icon: "/icons/tea.png" },
    { name: "Utensils", icon: "/icons/utensils.png" },
    { name: "Machineries", icon: "/icons/machineries.png" },
    { name: "Cakes", icon: "/icons/cakes.png" },
    { name: "Brownies", icon: "/icons/brownies.png" },
  ];

  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <div key={index} className="category">
          <img src={cat.icon} alt={cat.name} className="icon" />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
