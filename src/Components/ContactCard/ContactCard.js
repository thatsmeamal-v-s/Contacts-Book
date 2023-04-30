import React from "react";
import "./ContactCard.css";
import Button from "../../Elements/Button/Button";

const ContactCard = (props) => {
  let { firstName, lastName, status } = props;
  return (
    <div className="contact-card">
      <div className="card">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <span>{status}</span>
      </div>
      <Button
        value={"Edit"}
        css={{ backgroundColor: "#80d4ff", width: "100px" }}
      />
      <Button
        value={"Delete"}
        css={{ backgroundColor: "#ff6666", width: "100px" }}
      />
    </div>
  );
};

export default ContactCard;
