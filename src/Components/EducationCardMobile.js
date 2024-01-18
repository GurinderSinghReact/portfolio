import React, { useEffect, useState } from "react";
import "./EducationCardMobile.css";

const EducationCardMobile = ({ cardContent }) => {
  const [windowWidth, setWindowWidth] = useState(0);

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
    <div class={`experience-card`}>
      <div>
        <img
          src={cardContent.logo}
          alt="Gurinder Singh logo"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "56px",
          }}
        />
      </div>
      <second>
        <div class="second-header">
          <div class="first-header">
            <div class="card-header">{cardContent?.profileName}</div>
            <div class="card-company">{cardContent?.companyName}</div>
            <div class="card-subheader">
              {cardContent?.location} · {cardContent?.mode}
            </div>
          </div>
        </div>
      </second>
    </div>
  );
};

export default EducationCardMobile;
