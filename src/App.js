import React, { Component } from "react";
import uuid from "react-uuid";
import "./App.css";
import EducationInfo from "./components/EducationComp/EducationInfo";
import ExperienceInfo from "./components/ExperienceComp/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfoComp/PersonalInfo";

export default class App extends Component {
  state = {
    educationArray: [{ id: uuid() }],
  };
  addNewEducationBlock = () => {
    this.setState({
      educationArray: this.state.educationArray.concat({ id: uuid() }),
    });
  };

  saveChildrenState = (obj, index) => {
    const educationArray = [...this.state.educationArray];
    educationArray[index] = obj;
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
        <PersonalInfo />
        <div>
          <h3>Education Info</h3>
          {this.state.educationArray.map((obj) => (
            <EducationInfo
              educationArray={this.state.educationArray}
              addNewEducationBlock={this.addNewEducationBlock}
              key={obj.id}
              index={this.state.educationArray.indexOf(obj)}
              saveChildrenState={this.saveChildrenState}
              handleDelete={this.raiseDelete}
            />
          ))}
          <button onClick={this.addNewEducationBlock}>Add</button>
        </div>
        <ExperienceInfo />
      </React.Fragment>
    );
  }
}
