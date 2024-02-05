import React, { useEffect, useState } from "react";
import "./styles.css";
import Input from "../../Components/Input";

export default function Connect() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div
      class="contact-container"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(256, 256, 256, 0.1)"
          : "rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* {!isMobile && ( */}
      <div class="left-card">
        <div class="title-header">
          LET'S
          <br />
          <div style={{ marginLeft: "10%" }}>GET IN</div>
          TOUCH
        </div>
      </div>
      {/* )} */}
      <div class="right-card">
        <div class="inner-class">
          <div className="text-input-container">
            <input
              type="text"
              className="text-input"
              placeholder="Full Name"
            />
          </div>
          <div className="text-input-container">
            <input type="text" className="text-input" placeholder="Email" />
          </div>
          <div className="text-input-container">
            <input type="text" className="text-input" placeholder="Message" />
          </div>
          <img
            src={isDarkMode ? require("../../assets/images/whiteArrow.png") : require("../../assets/images/black-arrow.png")}
            alt="arrow"
            class="arrow"
          />
        </div>
        <div class="contact-card">
          GURINDER SINGH
          <br />
          <br />
          H.NO. 898, JAWAHAR COLONY
          <br />
          FARIDABAD, HARYANA
          <br />
          +91 9999389564
        </div>
      </div>
    </div>
  );
}
