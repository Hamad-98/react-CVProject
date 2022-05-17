import React, { useState } from "react";
import "../PersonalInfo/PersonalInfo.css";

export default function PersonalInfo() {
  const [personalObj, setPersonalObj] = useState({
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const [editing, setEditing] = useState(true);

  const checkEditingStatus = () => {
    if (editing) {
      return <React.Fragment>{createEditForm()}</React.Fragment>;
    } else {
      return <React.Fragment>{createDisplayForm()}</React.Fragment>;
    }
  };

  const createEditForm = () => {
    const { firstName, lastName, email, phoneNumber } =
      personalObj.personalInformation;
    return (
      <div className="form">
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={handleUserChange}
            placeholder="John"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={handleUserChange}
            placeholder="Doe"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={email}
            onChange={handleUserChange}
            placeholder="JohnDoe@gmail.com"
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleUserChange}
            placeholder="123-456-7890"
          />
        </label>
        <span>
          <button className="btn" onClick={handleSubmitClick}>
            Submit Changes
          </button>
        </span>
      </div>
    );
  };

  const createDisplayForm = () => {
    const { firstName, lastName, email, phoneNumber } =
      personalObj.personalInformation;
    return (
      <div className="form">
        <label>
          First Name:
          <span>{firstName}</span>
        </label>
        <label>
          Last Name:
          <span>{lastName}</span>
        </label>
        <label>
          Email:
          <span>{email}</span>
        </label>
        <label>
          Phone Number:
          <span>{phoneNumber}</span>
        </label>
        <span>
          <button className="btn" onClick={handleEditClick}>
            Edit
          </button>
        </span>
      </div>
    );
  };
  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSubmitClick = () => {
    setEditing(false);
  };

  const handleUserChange = (e) => {
    setPersonalObj((prevState) => ({
      personalInformation: {
        ...prevState.personalInformation,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return <div>{checkEditingStatus()}</div>;
}
