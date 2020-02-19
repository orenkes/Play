import React, { useContext } from "react";
import styled from "styled-components";

import { flexbox } from "../../../style/mixins";
import { GlobalContext } from "../../../state/GlobalState";

import { IoIosMusicalNote, IoIosMenu, IoIosClose } from "react-icons/io";

const HeaderSection = () => {
  const {
    showMenu,
    setShowMenu,
    setShowLyrics,
    showLyrics,
    showPlaylist,
    setShowPlaylist
  } = useContext(GlobalContext);

  return (
    <HeaderSectionWrapeer showMenu={showMenu}>
      <PlayerHeader>
        <MenuButtonWrapper>
          {showMenu ? (
            <CloseButton onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <MenuButton onClick={() => setShowMenu(!showMenu)} />
          )}
        </MenuButtonWrapper>
        <Header>
          PLAY
          <NoteIcon />
        </Header>
      </PlayerHeader>
      <MenuOptions showMenu={showMenu}>
        <Lyrics
          onClick={() => {
            setShowPlaylist(false);
            setShowLyrics(!showLyrics);
            setTimeout(() => setShowMenu(!showMenu), 0);
            // setShowMenu(!showMenu);
          }}
        >
          Lyrics
        </Lyrics>
        <Playlist
          onClick={() => {
            setShowLyrics(false);
            setShowPlaylist(!showPlaylist);
            setTimeout(() => setShowMenu(!showMenu), 0);
          }}
        >
          Playlist
        </Playlist>
      </MenuOptions>
    </HeaderSectionWrapeer>
  );
};

export default HeaderSection;

const HeaderSectionWrapeer = styled.div`
  ${flexbox()};
  width: 100%;
  height: 10%;
  background: #e0fffb;
  border-radius: 10px 10px 0 0;
  position: relative;
  z-index: 1;

  ::after {
    content: "";
    width: 220%;
    height: ${({ showMenu }) => (showMenu ? "600%" : "250%")};
    background: #e0fffb;
    position: absolute;
    bottom: -90%;
    bottom: ${({ showMenu }) => (showMenu ? "-350%" : "-100%")};
    right: -12%;
    border-radius: 60%;
    z-index: -1;
    transition: 0.3s linear;
    border-bottom: 7px solid #62929a;
  }
`;

const PlayerHeader = styled.div`
  font-family: "Fredoka One", cursive;
  width: 100%;
  ${flexbox()};
  justify-content: space-evenly;
  position: relative;
  bottom: -40%;

  span {
    color: #fc5c9c;
    color: #62929a;
  }
`;
const MenuButtonWrapper = styled.div`
  font-size: 1.3rem;
`;

const MenuButton = styled(IoIosMenu)`
  position: absolute;
  left: 5%;
  top: 20%;
  font-size: 2rem;
  align-self: flex-start;
  transition: 0.2s linear;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const CloseButton = styled(IoIosClose)`
  position: absolute;
  left: 5%;
  top: 20%;
  font-size: 2rem;
  align-self: flex-start;
  transition: 0.2s linear;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Header = styled.h2`
  width: 100%;
  text-align: center;

  font-size: 3.2rem;
  @media (max-width: 1900px) {
    font-size: 2.5rem;
  }
`;

const NoteIcon = styled(IoIosMusicalNote)`
  color: #62929a;
`;

const MenuOptions = styled.div`
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  width: 100%;
  height: 100%;
  height: ${({ showMenu }) => (showMenu ? "100%" : "0")};
  position: absolute;
  bottom: -200%;
  font-family: "Source Sans Pro", sans-serif;
  transition: 0.15s ease-in;
`;
const Lyrics = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 50%;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: #008698;
  ${flexbox()};
  transition: 0.2s linear;

  :hover {
    cursor: pointer;
    color: #38486f;
    transform: scale(1.1);
  }

  @media (max-width: 1400px) {
    font-size: 1.4rem;
  }
`;

const Playlist = styled(Lyrics)`
  margin-top: 10px;
`;
