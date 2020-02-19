import React, { useEffect, useContext, useRef, useState } from "react";
import styled from "styled-components";

import { flexbox } from "../../../style/mixins";
import { GlobalContext } from "../../../state/GlobalState";

import { FaPlay, FaRegHeart, FaPause } from "react-icons/fa";
import { MdLastPage, MdFirstPage } from "react-icons/md";

const ControlSection = () => {
  const audioTag = useRef();
  const {
    songsArray,
    selectedSong,
    sliderPostion,
    setSliderPostion,
    songIndex,
    setSongIndex,
    setShowMenu,
    isPlaying,
    setIsPlaying
  } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      if (isPlaying) {
        audioTag.current.play();
      } else {
        audioTag.current.pause();
      }
    }, 0);
  }, [songIndex]);

  const nextSong = () => {
    if (sliderPostion < 100 * songsArray.length - 100) {
      setSliderPostion(sliderPostion + 100);
      setSongIndex(songIndex + 1);
    } else {
      setSliderPostion(0);
      setSongIndex(0);
    }
  };

  const Back = () => {
    if (sliderPostion === 0) {
      setSliderPostion(100 * songsArray.length - 100);
      setSongIndex(songsArray.length - 1);
    } else if (sliderPostion > -100 * songsArray.length + 100) {
      setSliderPostion(sliderPostion - 100);
      setSongIndex(songIndex - 1);
    } else {
      setSliderPostion(0);
      setSongIndex(0);
    }
    setIsPlaying(false);
  };

  const playAndPause = () => {
    if (isPlaying) {
      audioTag.current.pause();
    } else {
      audioTag.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <ControlSectionWrapeer onClick={() => setShowMenu(false)}>
      <SongScrollerSection>
        <Player
          ref={audioTag}
          src={selectedSong.song}
          play={isPlaying}
          controls={true}
          controlsList="nodownload"
          onEnded={() => nextSong()}
        />
      </SongScrollerSection>
      <ButtonsSection>
        <BackButton onClick={() => Back()} />
        {isPlaying ? (
          <PauseButton onClick={() => playAndPause()} />
        ) : (
          <PlayButton onClick={() => playAndPause()} />
        )}
        <ForwardButton onClick={() => nextSong()} />
      </ButtonsSection>
    </ControlSectionWrapeer>
  );
};

export default ControlSection;

const ControlSectionWrapeer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  align-self: flex-end;
  z-index: 2;
`;

const SongScrollerSection = styled.div`
  ${flexbox()};
  height: 30%;
  width: 100%;
  background: #e0fffb;
  border-top: 4px solid #62929a;
  align-self: flex-end;
  background: whitesmoke;
`;

const Player = styled.audio`
  height: 100%;
  width: 100%;
  outline: none;

  ::-webkit-media-controls-play-button {
    display: none;
  }
  ::-webkit-media-controls-panel {
    background: #fcefee;
    background: white;
    background: #e0fffb;
  }

  ::-webkit-media-controls-mute-button {
  }

  ::-webkit-media-controls-current-time-display {
    font-weight: bold;
  }

  ::-webkit-media-controls-time-remaining-display {
    font-weight: bold;
  }
`;

const ButtonsSection = styled.div`
  ${flexbox()};
  height: 50%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  transition: 0.2s linear;
  background: white;
  background: #e0fffb;
  align-self: flex-end;
`;

const BackButton = styled(MdFirstPage)`
  flex-basis: 30%;
  width: 30%;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const PlayButton = styled(FaPlay)`
  width: 30%;
  flex-basis: 30%;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const PauseButton = styled(FaPause)`
  width: 30%;
  flex-basis: 30%;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ForwardButton = styled(MdLastPage)`
  width: 30%;
  flex-basis: 30%;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
