import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../state/GlobalState";

import LyricsScreen from "./LyricsScreen/LyricsScreen";
import PlaylistScreen from "./PlaylistScreen/PlaylistScreen";
import HeadSection from "./HeaderSection/HeaderSection";
import DisplaySection from "./DisplaySection/DisplaySection";
import ControlSection from "./ControlSection/ControlSection";

const MusicPlayer = () => {
  const {
    songsArray,
    setSelectedSong,
    selectedSong,
    songIndex,
    showLyrics,
    showPlaylist
  } = useContext(GlobalContext);

  useEffect(() => {
    setSelectedSong(songsArray[songIndex]);
  }, [songIndex]);

  return (
    <MusicPlayerWrapper backgroundImg={selectedSong.bgColor}>
      {showLyrics ? <LyricsScreen /> : null}
      {showPlaylist ? <PlaylistScreen /> : null}
      <HeadSection />
      <DisplaySection />
      <ControlSection />
    </MusicPlayerWrapper>
  );
};

const MusicPlayerWrapper = styled.div`
  height: 70%;
  width: 30%;
  background: #fcefee;
  border-radius: 20px;
  max-width: 450px;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  background: ${({ backgroundImg }) => backgroundImg};

  @media (max-width: 1900px) {
    width: 30%;
    height: 80%;
  }
  @media (max-width: 1200px) {
    width: 60%;
    height: 80%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`;

export default MusicPlayer;
