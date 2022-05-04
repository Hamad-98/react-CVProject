import React, { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import PersonalInfo from "./components/PersonalInfo";

export default class App extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();

    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      firstName: this.textInput.current.value,
    });
  };

  render() {
    return (
      <div>
        <h1>CV Creator With React</h1>
        <PersonalInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    );
  }
}
