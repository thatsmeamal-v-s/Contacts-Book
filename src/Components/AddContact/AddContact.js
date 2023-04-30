import React from "react";
import "./AddContact.css";
import Button from "../../Elements/Button/Button";

const AddContact = () => {
  const saveContact = () => {
    alert("its working");
  };
  return (
    <div className="add-contact-container">
      <div>
        <label>First Name: </label>
        <input type="text" placeholder="First Name" />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="status-container">
        <label>Status:</label>
        <div className="status">
          <input type="radio" checked="checked" name="radio" />
          <span>Active</span>
          <br></br>
          <input type="radio" name="radio" />
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
