import React, { Component } from "react";

export default class EducationInfo extends Component {
  state = {
    personalInformation: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    editing: true,
  };
  render() {
    return (
      <div>
        <h1>Education</h1>
      </div>
    );
  }
}
