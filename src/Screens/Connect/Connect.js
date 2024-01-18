import React from "react";
import "./styles.css";
import Input from "../../Components/Input";

export default function Connect() {
  return (
    <div class="contact-container">
      <div class="left-card">
        <div class="title-header">
          LET'S
          <br />
          <div style={{ marginLeft: "10%" }}>GET IN</div>
          TOUCH
        </div>
      </div>
      <div class="right-card">
        <div class="inner-class">
        <div className="text-input-container">
          <input type="text" className="text-input" placeholder="Full Name" />
        </div>
        <div className="text-input-container">
          <input type="text" className="text-input" placeholder="Email" />
        </div>
        <div className="text-input-container">
          <input type="text" className="text-input" placeholder="Message" />
        </div>
        <img
          src={require("../../assets/images/whiteArrow.png")}
          alt="arrow"
          class="arrow"
        />
        </div>
        <div class="contact-card">
          GURINDER SINGH
          <br /><br />
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