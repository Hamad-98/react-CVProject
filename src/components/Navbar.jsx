import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-family: monospace;
  margin: 0 auto;
`;

export default function Navbar() {
  return (
    <div>
      <header>
        <Title>CV Creator with React</Title>
      </header>
    </div>
  );
}
