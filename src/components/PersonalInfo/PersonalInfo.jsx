import React, { Component } from "react";
import "../PersonalInfo/PersonalInfo.css";

export default class PersonalInfo extends Component {
  state = {
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    editing: true,
  };

  checkEditingStatus = () => {
    if (this.state.editing) {
      return <React.Fragment>{this.createEditForm()}</React.Fragment>;
    } else {
      return <React.Fragment>{this.createDisplayForm()}</React.Fragment>;
    }
  };

  createEditForm = () => {
    return (
      <div className="form">
        <label>
          First Name:
          <input
            name="firstName"
            value={this.state.personalInformation.firstName}
            onChange={this.handleUserChange}
            placeholder="John"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={this.state.personalInformation.lastName}
            onChange={this.handleUserChange}
            placeholder="Doe"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={this.state.personalInformation.email}
            onChange={this.handleUserChange}
            placeholder="JohnDoe@gmail.com"
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phoneNumber"
            value={this.state.personalInformation.phoneNumber}
            onChange={this.handleUserChange}
            placeholder="123-456-7890"
          />
        </label>
        <span>
          <button className="btn" onClick={this.handleSubmitClick}>
            Submit Changes
          </button>
        </span>
      </div>
    );
  };

  createDisplayForm = () => {
    return (
      <div className="form">
        <label>
          First Name:
          <span>{this.state.personalInformation.firstName}</span>
        </label>
        <label>
          Last Name:
          <span>{this.state.personalInformation.lastName}</span>
        </label>
        <label>
          Email:
          <span>{this.state.personalInformation.email}</span>
        </label>
        <label>
          Phone Number:
          <span>{this.state.personalInformation.phoneNumber}</span>
        </label>
        <span>
          <button className="btn" onClick={this.handleEditClick}>
            Edit
          </button>
        </span>
      </div>
    );
  };
  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };
  handleSubmitClick = () => {
    this.setState({
      editing: false,
    });
  };

  handleUserChange = (e) => {
    this.setState({
      personalInformation: {
        ...this.state.personalInformation,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return <div>{this.checkEditingStatus()}</div>;
  }
}
