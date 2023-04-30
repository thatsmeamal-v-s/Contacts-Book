import React from "react";
import "./AddContact.css";
import Button from "../../Elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../../contactSlice";

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let firstName = React.createRef();
  let lastName = React.createRef();
  let active = React.createRef();
  let inactive = React.createRef();

  const saveContact = () => {
    let first = firstName.current.value;
    let last = lastName.current.value;
    let status = "active";
    if (inactive.current.checked) {
      status = inactive.current.value;
    }
    if (first && last) {
      dispatch(
        addContact({ firstName: first, lastName: last, status: status })
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
        <input type="text" placeholder="First Name" ref={firstName} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" placeholder="Last Name" ref={lastName} />
      </div>
      <div className="status-container">
        <label>Status:</label>
        <div className="status">
          <input type="radio" value="active" name="radio" ref={active} />
          <span>Active</span>
          <br></br>
          <input
            type="radio"
            name="radio"
            value="inactive"
            ref={inactive}
            checked={true}
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
