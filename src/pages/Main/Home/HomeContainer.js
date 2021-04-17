import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState, use } from "recoil";

import HomePresenter from "./HomePresenter";
import { nowPlayingApi, nowPlayingState } from "../../../stores/Api/Api";

export default () => {
  const [nowMovie, setNowMovie] = useRecoilState(nowPlayingState);
  const nowPlaying = useRecoilValue(nowPlayingApi);

  const getData = async () => {
    setNowMovie(nowPlaying);
  };

  useEffect(() => {
    getData();
  }, []);
  return <HomePresenter nowMovie={nowMovie} />;
};
