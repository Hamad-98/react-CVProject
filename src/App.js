import React, { Component } from "react";
import uuid from "react-uuid";
import "./App.css";
import EducationInfo from "./components/Education/EducationInfo";
import ExperienceInfo from "./components/Experience/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

export default class App extends Component {
  state = {
    educationArray: [{ id: uuid() }],
    experienceArray: [{ id: uuid() }],
  };
  addNewEducationBlock = (e) => {
    if (e.target.name === "edAddBtn") {
      this.setState({
        educationArray: this.state.educationArray.concat({ id: uuid() }),
      });
    } else {
      this.setState({
        experienceArray: this.state.experienceArray.concat({ id: uuid() }),
      });
    }
  };

  saveChildrenState = (obj, index) => {
    const educationArray = [...this.state.educationArray];
    educationArray[index] = { ...this.state.educationArray[index], obj };
    this.setState({
      educationArray: educationArray,
    });
  };

  raiseDelete = (index) => {
    const newClonedArray = [...this.state.educationArray];
    newClonedArray.splice(index, 1);
    this.setState({
      educationArray: newClonedArray,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="personalInfoDiv">
          <h3 className="header">Personal Info</h3>
          <PersonalInfo />
        </div>

        <div className="educationDiv">
          <h3 className="header">Education</h3>
          {this.state.educationArray.map((obj) => (
            <EducationInfo
              educationArray={this.state.educationArray}
              key={obj.id}
              index={this.state.educationArray.indexOf(obj)}
              saveChildrenState={this.saveChildrenState}
              handleDelete={this.raiseDelete}
            />
          ))}
          <button
            name="edAddBtn"
            className="addBtn"
            onClick={this.addNewEducationBlock}
          >
            Add
          </button>
        </div>

        <div className="experienceDiv">
          <h3 className="header">Experience</h3>
          {this.state.experienceArray.map((obj) => (
            <ExperienceInfo
              experienceArray={this.state.experienceArray}
              key={obj.id}
              index={this.state.experienceArray.indexOf(obj)}
              saveChildrenState={this.saveChildrenState}
              handleDelete={this.raiseDelete}
            />
          ))}
          <button
            name="expAddBtn"
            className="addBtn"
            onClick={this.addNewEducationBlock}
          >
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}
