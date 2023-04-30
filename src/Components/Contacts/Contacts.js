import React from "react";
import "./Contacts.css";
import ContactCard from "../ContactCard/ContactCard";
import Button from "../../Elements/Button/Button";
import AddContact from "../AddContact/AddContact";

const Contacts = () => {
  let createContact = () => {
    alert("its working");
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
      <AddContact />
      <div className="card-container">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </>
  );
};

export default Contacts;
