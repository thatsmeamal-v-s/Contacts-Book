import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../Elements/Button/Button";
import { editContact } from "../../contactSlice";

const EditContact = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactDetails = useLocation();

  let [firstName, setFirstName] = useState(contactDetails.state.firstName);
  let [lastName, setLastName] = useState(contactDetails.state.lastName);
  let [status, setStatus] = useState(contactDetails.state.status);

  const handleChange = (key, e) => {
    if (key === "firstName") {
      setFirstName(e.target.value);
    } else if (key === "lastName") {
      setLastName(e.target.value);
    } else {
      setStatus(key);
    }
  };

  const modifyContact = () => {
    if (firstName && lastName) {
      dispatch(
        editContact({
          id: contactDetails.state.id,
          firstName: firstName,
          lastName: lastName,
          status: status,
        })
      );
      navigate("/");
    } else {
      alert("One or more values missing");
    }
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
        value={"Modify Contact"}
        css={{ backgroundColor: "#33cc33" }}
        onClick={modifyContact}
      />
    </div>
  );
};

export default EditContact;
