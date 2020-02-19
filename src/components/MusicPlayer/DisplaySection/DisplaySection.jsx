import React, { useContext, useRef } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../../state/GlobalState";
import { flexbox } from "../../../style/mixins";

import SongBox from "./SongBox";

const DisplaySection = () => {
  const { songsArray, sliderPostion, setShowMenu } = useContext(GlobalContext);

  const slider = useRef();

  const songs = songsArray.map(song => <SongBox key={song.name} song={song} />);

  return (
    <DisplaySectionWrapeer onClick={() => setShowMenu(false)}>
      <AllSongsContainer>
        <SongsSlider
          ref={slider}
          songsArray={songsArray}
          sliderPostion={sliderPostion}
        >
          {songs}
        </SongsSlider>
      </AllSongsContainer>
    </DisplaySectionWrapeer>
  );
};

export default DisplaySection;

const DisplaySectionWrapeer = styled.div`
  width: 100%;
  height: 60%;
  align-self: flex-end;
  margin-top: 10%;
  ${flexbox()};
  flex-wrap: wrap;
`;

const AllSongsContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const SongsSlider = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: ${({ sliderPostion, songsArray }) =>
    sliderPostion === 0 || sliderPostion === 100 * songsArray.length - 100
      ? "none"
      : "0.2s linear"};
  transform: ${({ sliderPostion }) => `translateX(-${sliderPostion}%)`};
`;
