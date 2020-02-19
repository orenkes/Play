import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { flexbox } from "../../../style/mixins";
import { GlobalContext } from "../../../state/GlobalState";

import { TiNotes } from "react-icons/ti";
import { IoIosReturnLeft } from "react-icons/io";

const PlaylistScreen = () => {
  const [Playlist, setPlaylist] = useState([]);

  const { songsArray, setShowMenu, setShowPlaylist } = useContext(
    GlobalContext
  );

  useEffect(() => {
    const playlistLi = songsArray.map(song => (
      <Song key={song.name}>
        <span>
          <NoteIcon /> {song.name} by {song.artist}
        </span>
        <span> {song.length} </span>
      </Song>
    ));
    setPlaylist(playlistLi);
  }, []);

  return (
    <PlaylistScreenWrapper onClick={() => setShowMenu(false)}>
      <PlaylistHeader>
        <BackButton onClick={() => setShowPlaylist(false)} />
        Playlist
      </PlaylistHeader>
      <PlaylistWrpaeer>{Playlist}</PlaylistWrpaeer>
    </PlaylistScreenWrapper>
  );
};

export default PlaylistScreen;

const PlaylistScreenWrapper = styled.div`
  position: absolute;
  ${flexbox()};
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background: blue;
  z-index: 1;
  background: linear-gradient(to bottom, #2b5876, #4e4376);
  font-family: "Kanit", sans-serif;
`;

const PlaylistHeader = styled.h1`
  ${flexbox()};
  width: 70%;
  height: 10%;
  color: #dfebed;
  font-size: 1.5rem;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
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

const PlaylistWrpaeer = styled.ul`
  height: 50%;
  width: 90%;
  line-height: 30px;
  overflow-x: auto;
`;

const Song = styled.li`
  height: 15%;
  color: whitesmoke;
  ${flexbox()};
  justify-content: space-between;
  span {
    ${flexbox()};
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

const NoteIcon = styled(TiNotes)`
  padding-right: 5px;
`;
