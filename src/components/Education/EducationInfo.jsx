import React, { Component } from "react";
import "./EducationInfo.css";

export default class EducationInfo extends Component {
  state = {
    schoolInfo: { schoolName: "", program: "", startDate: "", endDate: "" },
    editing: true,
  };

  checkEditingStatus = () => {
    if (this.state.editing) {
      return <React.Fragment>{this.createEditForm()}</React.Fragment>;
    } else {
      return <React.Fragment>{this.createDisplayForm()}</React.Fragment>;
    }
  };

  createEditForm = () => {
    const { schoolName, program, startDate, endDate } = this.state.schoolInfo;
    return (
      <div className="form">
        <label>
          School Name:
          <input
            name="schoolName"
            value={schoolName}
            onChange={this.handleChange}
            placeholder=""
          />
        </label>
        <label>
          Program:
          <input
            name="program"
            value={program}
            onChange={this.handleChange}
            placeholder=""
          />
        </label>
        <label>
          Start Date:
          <input
            name="startDate"
            value={startDate}
            onChange={this.handleChange}
            placeholder=""
          />
        </label>
        <label>
          End Date:
          <input
            name="endDate"
            value={endDate}
            onChange={this.handleChange}
            placeholder=""
          />
        </label>
        <span>
          <button className="btn" onClick={this.handleSubmitClick}>
            Submit Changes
          </button>
        </span>
      </div>
    );
  };

  createDisplayForm = () => {
    const { schoolName, program, startDate, endDate } = this.state.schoolInfo;

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
          <button className="btn" onClick={this.handleEditClick}>
            Edit
          </button>
          <button
            className="btn"
            // passing parameter to an event handler use ()=>{}
            onClick={() => this.props.handleDelete(this.props.index)}
          >
            Delete
          </button>
        </span>
      </div>
    );
  };

  handleChange = (e) => {
    this.setState({
      schoolInfo: {
        ...this.state.schoolInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleSubmitClick = () => {
    this.props.saveChildrenState(this.state.schoolInfo, this.props.index);
    this.setState({
      editing: false,
    });
  };

  render() {
    return <React.Fragment>{this.checkEditingStatus()} </React.Fragment>;
  }
}
