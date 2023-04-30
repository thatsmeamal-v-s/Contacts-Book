import React, { useState } from "react";
import "./AddContact.css";
import Button from "../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../../contactSlice";

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [status, setStatus] = useState("active");

  const handleChange = (key, e) => {
    if (key === "firstName") {
      setFirstName(e.target.value);
    } else if (key === "lastName") {
      setLastName(e.target.value);
    } else {
      setStatus(key);
    }
  };

  const saveContact = () => {
    if (firstName && lastName) {
      dispatch(
        addContact({ firstName: firstName, lastName: lastName, status: status })
      );
    } else {
      alert("One or more values missing");
    }
    navigate("/");
  };

  return (
    <div className="add-contact-container">
      <div>
        <label>First Name: </label>
        <input
          key="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => handleChange("firstName", e)}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          key="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => handleChange("lastName", e)}
        />
      </div>
      <div className="status-container">
        <label>Status:</label>
        <div className="status">
          <input
            type="radio"
            value="active"
            name="radio"
            checked={status === "active"}
            onChange={(e) => handleChange("active", e)}
          />
          <span>Active</span>
          <br></br>
          <input
            type="radio"
            name="radio"
            value="inactive"
            checked={status === "inactive"}
            onChange={(e) => handleChange("inactive", e)}
          />
          <span>Inactive</span>
        </div>
      </div>
      <Button
        value={"Save Contact"}
        css={{ backgroundColor: "#33cc33" }}
        onClick={saveContact}
      />
    </div>
  );
};

export default AddContact;
