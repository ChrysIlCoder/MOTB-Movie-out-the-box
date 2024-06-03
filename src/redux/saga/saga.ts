import { all } from "redux-saga/effects";
import { moviesSagas } from "./movies/sagas";

export const SAGAS_FLOW_NAMES = {
  GET_MOVIES: "GET_MOVIES",
  GET_MOVIE_DETAILS_BY_ID: "GET_MOVIE_DETAILS_BY_ID",
  GET_SIMILAR_MOVIES_BY_ID: "GET_SIMILAR_MOVIES_BY_ID",
  GET_FIND_MOVIE_BY_NAME: "GET_FIND_MOVIE_BY_NAME"
};

export default function* rootSaga() {
  yield all([
    ...moviesSagas
  ]);
}
