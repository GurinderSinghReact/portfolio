import React, { useState } from "react";
import "./CollapsibleCard.css";
import { getDuration } from "../utils/helperFunctions";
import moment from "moment";

const CollapsibleCard = ({ cardContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div class={`experience-card ${isExpanded ? "expanded" : ""}`}>
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4D0BAQGpHvxqOmu-Qg/company-logo_200_200/0/1696404086102/taxmann_technologies_private_limited_logo?e=1712793600&v=beta&t=qTfzOeyiWF_Xd0IphMDFiEHvZaXW29-ZiGoSCaZK7iI"
          alt="Gurinder Singh logo"
          style={{
            width: "64px",
            height: "64px",
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
        </div>
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
