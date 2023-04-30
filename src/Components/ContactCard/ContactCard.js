import React from "react";
import "./ContactCard.css";
import Button from "../../Elements/Button/Button";

const ContactCard = () => {
  return (
    <>
      <div className="contact-card">
        <div className="card">
          <div className="card-heading">
            <p>Address</p>
          </div>
          <div className="card-content-container">
            <div className="card-content">
              <span>C-1/351/4, GIDC Makarpura</span>
            </div>
            <span>Vadodara - 390010, Gujarat, India</span>
          </div>
        </div>
        <Button
          value={"Edit"}
          css={{ backgroundColor: "#66b3ff", width: "100px" }}
        />
        <Button
          value={"Delete"}
          css={{ backgroundColor: "#ff0000", width: "100px" }}
        />
      </div>
    </>
  );
};

export default ContactCard;
