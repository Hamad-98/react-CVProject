import React, { Component } from "react";

export default class ExperienceInfo extends Component {
  state = {
    educationInfo: {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
    },
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
    const { companyName, positionTitle, startDate, endDate } =
      this.state.educationInfo;
    return (
      <div className="form">
        <label>
          Company Name:
          <input
            name="companyName"
            value={companyName}
            onChange={this.handleChange}
            placeholder=""
          />
        </label>
        <label>
          position Title:
          <input
            name="positionTitle"
            value={positionTitle}
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
    const { companyName, positionTitle, startDate, endDate } =
      this.state.educationInfo;

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
      educationInfo: {
        ...this.state.educationInfo,
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
    //this.props.saveChildrenState(this.state.educationInfo, this.props.index);
    this.setState({
      editing: false,
    });
  };

  render() {
    return <React.Fragment>{this.checkEditingStatus()} </React.Fragment>;
  }
}
