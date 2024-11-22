import React, { useState, useEffect } from "react";
import "./IntroSection.css";

const IntroSection = () => {
  const words = ["Start", "Grow", "Operate"]; // Words to display
  const [currentIndex, setCurrentIndex] = useState(0); // Index to track the word

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    }, 1500); // Change word every 0.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className="intro-section">
      <h2>Kaffe Code Platform To</h2>
      <h1>{words[currentIndex]}</h1> {/* Display the current word */}
      <p>Your Bakery/ Tea/ Coffee Business</p>
      <p>
        Kaffe Codes is the platform to run a successful online business in
        Nepal.
      </p>
    </div>
  );
};

export default IntroSection;
