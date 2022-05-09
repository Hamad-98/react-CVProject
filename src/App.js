import React, { Component } from "react";
import "./App.css";
import EducationInfo from "./components/EducationComp/EducationInfo";
import ExperienceInfo from "./components/ExperienceComp/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfoComp/PersonalInfo";
import uuid from "react-uuid";

export default class App extends Component {
  state = {
    educationArray: [{}],
  };
  addNewEducationBlock = () => {
    this.setState({
      educationArray: this.state.educationArray.concat({}),
    });
  };

  saveChildrenState = (obj, index) => {
    const educationArray = [...this.state.educationArray];
    educationArray[index] = obj;
    this.setState({
      educationArray: educationArray,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PersonalInfo />
        <div>
          <h3>Education Info</h3>
          {this.state.educationArray.map((obj) => (
            <EducationInfo
              educationArray={this.state.educationArray}
              addNewEducationBlock={this.addNewEducationBlock}
              key={this.state.educationArray.indexOf(obj)}
              index={this.state.educationArray.indexOf(obj)}
              saveChildrenState={this.saveChildrenState}
            />
          ))}
          <button onClick={this.addNewEducationBlock}>Add</button>
        </div>
        <ExperienceInfo />
      </React.Fragment>
    );
  }
}
