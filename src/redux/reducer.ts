import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "./saga/movies/slice";

export default combineReducers({
  movies: moviesReducer,
})