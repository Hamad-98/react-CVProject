import React, { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10px;
  border: 1px-solid black;
  background-color: papayawhip;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <PersonalInfo />
        <EducationInfo />
        <ExperienceInfo />
      </Wrapper>
    );
  }
}
