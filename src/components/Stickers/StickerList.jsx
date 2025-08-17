import React from "react";
import styled from "styled-components";
import { Sticker } from "./Sticker.jsx";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 5px;
`;

export class StickerList extends React.Component {
  render() {
    return (
      <List>
        {this.props.data.map((el, id) => (
          <Sticker handleCurrentStickerChange={this.props.handleCurrentStickerChange} data={el} key={id} />
        ))}
      </List>
    )
  }
}

