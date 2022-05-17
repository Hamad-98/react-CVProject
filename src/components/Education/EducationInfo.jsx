import React, { useState } from "react";
import "./EducationInfo.css";

export default function EducationInfo(props) {
  const [educationObj, setSchoolObj] = useState({
    educationInfo: {
      schoolName: "",
      program: "",
      startDate: "",
      endDate: "",
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
    const { schoolName, program, startDate, endDate } =
      educationObj.educationInfo;
    return (
      <div className="form">
        <label>
          School Name:
          <input
            name="schoolName"
            value={schoolName}
            onChange={handleChange}
            placeholder=""
          />
        </label>
        <label>
          Program:
          <input
            name="program"
            value={program}
            onChange={handleChange}
            placeholder=""
          />
        </label>
        <label>
          Start Date:
          <input
            name="startDate"
            value={startDate}
            onChange={handleChange}
            placeholder=""
          />
        </label>
        <label>
          End Date:
          <input
            name="endDate"
            value={endDate}
            onChange={handleChange}
            placeholder=""
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
    const { schoolName, program, startDate, endDate } =
      educationObj.educationInfo;

    return (
      <div className="form">
        <label>
          School Name:
          <span>{schoolName}</span>
        </label>
        <label>
          Program:
          <span>{program}</span>
        </label>
        <label>
          Start Date:
          <span>{startDate}</span>
        </label>
        <label>
          End Date:
          <span>{endDate}</span>
        </label>
        <span>
          <button className="btn" onClick={handleEditClick}>
            Edit
          </button>
          <button
            name="edDelBtn"
            className="btn"
            // passing parameter to an event handler use ()=>{}
            onClick={() => props.handleDelete(props.index)}
          >
            Delete
          </button>
        </span>
      </div>
    );
  };

  const handleChange = (e) => {
    setSchoolObj((prevState) => ({
      educationInfo: {
        ...prevState.educationInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSubmitClick = () => {
    setEditing(false);
  };

  return <React.Fragment>{checkEditingStatus()} </React.Fragment>;
}
