import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { flexbox } from "../../../style/mixins";
import { GlobalContext } from "../../../state/GlobalState";

const SongBox = ({ song }) => {
  const { isPlaying } = useContext(GlobalContext);

  return (
    <SongBoxWrapeer backgroundImg={song.bgColor}>
      <SongName>{song.name}</SongName>
      <ArtistName>{song.artist}</ArtistName>
      <SongImg backgroundImg={song.img}>
        <DiskImage isPlaying={isPlaying} />
      </SongImg>
    </SongBoxWrapeer>
  );
};

export default SongBox;

const SongBoxWrapeer = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox()};
  flex-wrap: wrap;
  flex: 0 0 auto;
`;

const SongImg = styled.div`
  height: 50%;
  width: 50%;
  background-size: cover;
  box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.59);
  box-shadow: -1px -1px 5px 0px rgba(255, 255, 255, 0.1);
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
`;

const DiskImage = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  transition: 0.2s ease-in;
  left: ${({ isPlaying }) => (isPlaying ? "-40%" : 0)};
  top: 10%;
  background-image: url("https://lh3.googleusercontent.com/proxy/V-VpFTafdCfnMPBvSYw-dEWtavYH_aioKzzE6gQptCrLHRGAaYkTzDC0wCCLrGBUX5gsiPOVP2PuKKwhqdlBfZMnwhNKBJbY2mB5EOjGMOZkDHv88xVISqwPilsp");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  animation: ${({ isPlaying }) =>
    isPlaying ? "spin 4s linear infinite" : "none"};
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SongName = styled.h2`
  width: 100%;
  text-align: center;
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-size: 2.2rem;
  letter-spacing: 2px;
  @media (max-width: 1400px) {
    font-size: 1.7rem;
  }
`;

const ArtistName = styled.h3`
  width: 100%;
  text-align: center;
  color: lightgrey;
  font-family: "Roboto Slab", serif;
  font-size: 1.1rem;
  @media (max-width: 1400px) {
    font-size: 0.9rem;
  }
`;
