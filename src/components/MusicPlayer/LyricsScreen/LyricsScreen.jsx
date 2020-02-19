import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { GlobalContext } from "../../../state/GlobalState";
import { flexbox } from "../../../style/mixins";
import { IoIosReturnLeft } from "react-icons/io";

const LyricsScreen = () => {
  const { selectedSong, setShowMenu, setShowLyrics } = useContext(
    GlobalContext
  );
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    const lyricsArray = selectedSong.lyrics.split("/");
    const lyricsList = lyricsArray.map((line, index) => (
      <li key={index}>{line}</li>
    ));
    setLyrics(lyricsList);
  }, [selectedSong]);

  return (
    <LyricsScreenWrapper
      bgColor={selectedSong.bgColor}
      onClick={() => setShowMenu(false)}
    >
      <LyricsHeadr>
        <BackButton onClick={() => setShowLyrics(false)} />
        {selectedSong.name}
      </LyricsHeadr>
      <LyricsList>{lyrics}</LyricsList>
    </LyricsScreenWrapper>
  );
};

export default LyricsScreen;

const LyricsScreenWrapper = styled.div`
  position: absolute;
  ${flexbox()};
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background: blue;
  z-index: 1;
  background: ${({ bgColor }) => bgColor};
  font-family: "Kanit", sans-serif;
`;

const LyricsHeadr = styled.h3`
  width: 100%;
  height: 10%;
  ${flexbox()};
  text-align: center;
  align-self: flex-start;
  color: #dfebed;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
`;

const BackButton = styled(IoIosReturnLeft)`
  position: absolute;
  left: 5%;
  font-size: 2rem;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    color: lightgrey;
  }
`;

const LyricsList = styled.ul`
  overflow-y: auto;
  width: 90%;
  height: 50%;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  line-height: 18px;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;
