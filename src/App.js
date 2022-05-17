import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import EducationInfo from "./components/Education/EducationInfo";
import ExperienceInfo from "./components/Experience/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

export default function App() {
  const [educationArray, setEducationArray] = useState([{ id: uuid() }]);
  const [experienceArray, setExperienceArray] = useState([{ id: uuid() }]);

  const addNewEducationBlock = (e) => {
    if (e.target.name === "edAddBtn") {
      setEducationArray(educationArray.concat({ id: uuid() }));
    } else {
      setExperienceArray(experienceArray.concat({ id: uuid() }));
    }
  };

  const raiseExperienceDelete = (index) => {
    const newClonedArray = [...experienceArray];
    newClonedArray.splice(index, 1);
    setExperienceArray(newClonedArray);
  };

  const raiseEducationDelete = (index) => {
    const newClonedArray = [...educationArray];
    newClonedArray.splice(index, 1);
    setEducationArray(newClonedArray);
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="personalInfoDiv">
        <h3 className="header">Personal Info</h3>
        <PersonalInfo />
      </div>

      <div className="educationDiv">
        <h3 className="header">Education</h3>
        {educationArray.map((obj) => (
          <EducationInfo
            educationArray={educationArray}
            key={obj.id}
            index={educationArray.indexOf(obj)}
            handleDelete={raiseEducationDelete}
          />
        ))}
        <button
          name="edAddBtn"
          className="addBtn"
          onClick={addNewEducationBlock}
        >
          Add
        </button>
      </div>

      <div className="experienceDiv">
        <h3 className="header">Experience</h3>
        {experienceArray.map((obj) => (
          <ExperienceInfo
            experienceArray={experienceArray}
            key={obj.id}
            index={experienceArray.indexOf(obj)}
            handleDelete={raiseExperienceDelete}
          />
        ))}
        <button
          name="expAddBtn"
          className="addBtn"
          onClick={addNewEducationBlock}
        >
          Add
        </button>
      </div>
    </React.Fragment>
  );
}
