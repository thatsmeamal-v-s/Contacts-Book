import React from "react";
import "./Contacts.css";
import ContactCard from "../ContactCard/ContactCard";
import Button from "../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();

  const createContact = () => {
    navigate("/createcontact");
  };

  return (
    <>
      <div className="create-contact">
        <Button
          value={"Create Contact"}
          css={{ backgroundColor: "#33cc33" }}
          onClick={createContact}
        />
      </div>
      <div className="card-container">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </>
  );
};

export default Contacts;
