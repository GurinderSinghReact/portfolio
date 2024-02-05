import React, { useEffect, useState } from "react";
import "./CollapsibleCard.css";
import { getDuration } from "../utils/helperFunctions";
import moment from "moment";

const CollapsibleCard = ({ cardContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
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

  const toggleCard = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div class={`experience-card ${isExpanded ? "expanded" : ""}`} style={{backgroundColor: isDarkMode ?  'rgba(256, 256, 256, 0.07)' : 'rgba(0, 0, 0, 0.04)'}}>
      <div>
        <img
          src={cardContent.logo}
          alt="Gurinder Singh logo"
          style={{
            width: isMobile ? "56px" : "64px",
            height: isMobile ? "56px" : "64px",
            borderRadius: "8px",
          }}
        />
      </div>
      <second>
        <div class="second-header" onClick={toggleCard}>
          <div class="first-header">
            <div class="card-header">{cardContent?.profileName}</div>
            <div class="card-company">
              {cardContent?.companyName} · {cardContent?.role}
            </div>
            <div class="card-subheader">
              {cardContent?.location} · {cardContent?.mode}
            </div>
          </div>
          {!isMobile && (
            <div class="card-subheader">
              {moment(cardContent?.joiningDate).format("MMM YYYY")} -{" "}
              {cardContent?.exitDate === moment().format("MM-YY-YYYY")
                ? "Present"
                : moment(cardContent?.exitDate).format("MMM YYYY")}{" "}
              ·{" "}
              {getDuration(
                [
                  moment(
                    moment(cardContent?.exitDate).format("MM-YY-YYYY"),
                    "MM-YY-YYYY"
                  ).format("YYYY, MM, DD"),
                ],
                [
                  moment(
                    moment(cardContent?.joiningDate).format("MM-YY-YYYY"),
                    "MM-YY-YYYY"
                  ).format("YYYY, MM, DD"),
                ]
              )}
            </div>
          )}
        </div>
        {isMobile && (
          <div class="card-subheader">
            {moment(cardContent?.joiningDate).format("MMM YYYY")} -{" "}
            {cardContent?.exitDate === moment().format("MM-YY-YYYY")
              ? "Present"
              : moment(cardContent?.exitDate).format("MMM YYYY")}{" "}
            ·{" "}
            {getDuration(
              [
                moment(
                  moment(cardContent?.exitDate).format("MM-YY-YYYY"),
                  "MM-YY-YYYY"
                ).format("YYYY, MM, DD"),
              ],
              [
                moment(
                  moment(cardContent?.joiningDate).format("MM-YY-YYYY"),
                  "MM-YY-YYYY"
                ).format("YYYY, MM, DD"),
              ]
            )}
          </div>
        )}
        {isExpanded && (
          <ul>
            {cardContent?.achivements?.map((val) => (
              <li>{val}</li>
            ))}
          </ul>
        )}
      </second>
    </div>
  );
};

export default CollapsibleCard;
