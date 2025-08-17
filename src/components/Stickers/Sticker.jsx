import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  transition: 0.2s;

  &:hover {
    transform: translate(-10px, -10px);
  }
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
`;

export class Sticker extends React.Component {
  render() {
    return (
      <Item onClick={() => this.props.handleCurrentStickerChange(this.props.data.label)}>
        <img src={this.props.data.img} alt={this.props.data.label} />
        <Text>{this.props.data.label}</Text>
      </Item>
    )
  }
}
