import React, { Component } from "react";

export default class PersonalInfo extends Component {
  state = {
    personalInformation: {
      firstName: "Hamad",
      lastName: "Ahmad",
    },
    editing: true,
  };

  checkEditingStatus = () => {
    if (this.state.editing) {
      return (
        <div>
          <input
            name="firstName"
            value={this.state.personalInformation.firstName}
            onChange={this.handleUserChange}
          />
          <input
            name="lastName"
            value={this.state.personalInformation.lastName}
            onChange={this.handleUserChange}
          />
        </div>
      );
    } else {
      return (
        <div>
          {this.state.personalInformation.firstName}{" "}
          {this.state.personalInformation.lastName}
        </div>
      );
    }
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
    return (
      <div>
        {this.checkEditingStatus()}
        <button onClick={this.handleEditClick}>Edit</button>
        <button onClick={this.handleSubmitClick}>Submit</button>
      </div>
    );
  }
}
