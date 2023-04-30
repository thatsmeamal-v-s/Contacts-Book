import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactCard.css";
import Button from "../../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../contactSlice";

const ContactCard = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id, firstName, lastName, status } = props;

  const editContact = () => {
    navigate(`editcontact`, { state: props });
  };

  const removeContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contact-card">
      <div
        className="card"
        style={
          {
            // boxShadow: status === "inactive" ? "none" : "",
            // backgroundColor: status === "inactive" ? "#ffe6e6" : "",
          }
        }
      >
        <p>{firstName}</p>
        <p>{lastName}</p>
        <span>{status}</span>
      </div>
      <Button
        value={"Edit"}
        css={{ backgroundColor: "#80d4ff", width: "100px" }}
        onClick={editContact}
      />
      <Button
        value={"Delete"}
        css={{ backgroundColor: "#ff6666", width: "100px" }}
        onClick={removeContact}
      />
    </div>
  );
};

export default ContactCard;
