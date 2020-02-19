import React, { useState, createContext } from "react";

import songsData from "../data/songsData";

export const GlobalContext = createContext();

const Provider = GlobalContext.Provider;

export const GlobalProvider = ({ children }) => {
  const [songsArray, setSongsArray] = useState(songsData);
  const [selectedSong, setSelectedSong] = useState("");
  const [songIndex, setSongIndex] = useState(0);
  const [sliderPostion, setSliderPostion] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const state = {
    songsArray,
    selectedSong,
    sliderPostion,
    songIndex,
    showMenu,
    showLyrics,
    showPlaylist,
    isPlaying
  };

  const action = {
    setSongsArray,
    setSelectedSong,
    setSliderPostion,
    setSongIndex,
    setShowMenu,
    setShowLyrics,
    setShowPlaylist,
    setIsPlaying
  };

  return <Provider value={{ ...state, ...action }}>{children}</Provider>;
};
