import React, { Component } from "react";
import "./App.css";
import EducationInfo from "./components/EducationComp/EducationInfo";
import ExperienceInfo from "./components/ExperienceComp/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfoComp/PersonalInfo";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PersonalInfo />
        <EducationInfo />
        <ExperienceInfo />
      </React.Fragment>
    );
  }
}
