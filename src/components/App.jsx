import React from "react";
import styled from "styled-components";
import "../style/fonts.css";

import GlobalStyle from "../style/GlobalStyle";
import { flexbox } from "../style/mixins";
import { FaPlay, FaLinkedin } from "react-icons/fa";

import MusicPlayer from "./MusicPlayer";

const App = () => {
  return (
    <AppWrapper>
      <AppHeader>
        Play
        <span>
          <HeaderIcon />
        </span>
      </AppHeader>
      <AppCredits>
        Made from scratch by{" "}
        <span>
          <LinkToLinkedin
            href="https://www.linkedin.com/in/oren-kesler-934245144/"
            target="_blank"
          >
            Oren Kesler <LinkedinIcon />
          </LinkToLinkedin>
        </span>
      </AppCredits>
      <MusicPlayer />
      <GlobalStyle />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${flexbox()};
  align-content: center;
  flex-wrap: wrap;
  background: #303a52;
  overflow: hidden;
`;

const AppHeader = styled.h1`
  width: 100%;
  ${flexbox({ ai: "flex-end" })};
  color: #482ff7;
  color: #c82586;
  font-size: 4rem;
  font-family: "Modak";
  align-self: flex-start;
  padding-top: 10px;
  height: 10%;
`;
const AppCredits = styled.h3`
  width: 100%;
  ${flexbox({ ai: "flex-end" })};
  color: #973961;
  font-size: 1.5rem;
  align-self: flex-start;
  font-family: "Kanit", sans-serif;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

const LinkToLinkedin = styled.a`
  text-decoration: none;
  color: #d62b70;
  padding-left: 5px;
  transition: 0.2s ease-in;

  :hover {
    cursor: pointer;
    color: #ff006c;
  }
`;

const LinkedinIcon = styled(FaLinkedin)`
  font-size: 1rem;

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }
`;

const HeaderIcon = styled(FaPlay)`
  font-size: 1.5rem;
  padding-left: 10px;
  color: #775ada;
  color: #584f84;
`;

export default App;
