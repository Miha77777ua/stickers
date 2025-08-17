import React from "react";
import styled from "styled-components";

const Text = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid red;
  margin: 0;
  font-size: 21px;
  font-weight: bold;
`;

export class Choice extends React.Component {
  render() {
    return (
      <Text>Choice: {this.props.currentSticker}</Text>
    )
  }
}
