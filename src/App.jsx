import React from "react";
import { StickerList } from "./components/Stickers/StickerList.jsx";
import GlobalStyles from "./theme/globalStyles.js";
import data from "./data/stickers.json";
import styled from "styled-components";
import { Choice } from "./components/Choice.jsx";

const Title = styled.h1` 
  font-size: 36px;
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentSticker: data[0].label,
  }

  changeCurrentSticker = (sticker) => {
    this.setState({
      currentSticker: sticker,
    });
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Title>Stickers</Title>
        <Choice currentSticker={this.state.currentSticker} />
        <StickerList data={data} currentSticker={this.state.currentSticker} handleCurrentStickerChange={this.changeCurrentSticker} />
      </>
    )
  }
}

export default App
