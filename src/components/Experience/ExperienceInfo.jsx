import React, { useState } from "react";

export default function ExperienceInfo(props) {
  const [experienceObj, setEducationObj] = useState({
    experienceInfo: {
      companyName: "",
      positionTitle: "",
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
    const { companyName, positionTitle, startDate, endDate } =
      experienceObj.experienceInfo;
    return (
      <div className="form">
        <label>
          Company Name:
          <input
            name="companyName"
            value={companyName}
            onChange={handleChange}
            placeholder=""
          />
        </label>
        <label>
          Position Title:
          <input
            name="positionTitle"
            value={positionTitle}
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
    const { companyName, positionTitle, startDate, endDate } =
      experienceObj.experienceInfo;

    return (
      <div className="form">
        <label>
          Company Name:
          <span>{companyName}</span>
        </label>
        <label>
          Position Title:
          <span>{positionTitle}</span>
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
            name="expDelBtn"
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
    setEducationObj((prevState) => ({
      experienceInfo: {
        ...prevState.experienceInfo,
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
