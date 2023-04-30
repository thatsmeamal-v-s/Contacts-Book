import React from "react";
import "./Contacts.css";
import ContactCard from "../ContactCard/ContactCard";
import Button from "../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Contacts = () => {
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contact);
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
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              status={contact.status}
            />
          );
        })}
      </div>

      {!contacts.length && (
        <div className="empty-list">
          <p>No Contacts Found</p>
          <p>Please add contacts using Create Contact button</p>
        </div>
      )}
    </>
  );
};

export default Contacts;
