import React, { useEffect, useState } from "react";
import styles from "./JoinUs.module.css";
const JoinUs = () => {
  const [gradient, setGradient] = useState(generateRandomGradient());

  useEffect(() => {
    const interval = setInterval(() => {
      setGradient(generateRandomGradient());
    }, 5000); // Change the gradient every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  function generateRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    return gradient;
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div
      className={`h-screen relative ${styles.banner}`}
      style={{
        background: gradient,
        transition: "background 1s ease-in-out",
      }}
    ></div>
  );
};

export default JoinUs;
