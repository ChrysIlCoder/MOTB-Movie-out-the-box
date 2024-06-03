import { takeLatest, put, call, fork } from "redux-saga/effects";
import { SAGAS_FLOW_NAMES } from "../saga";
import { moviesActions } from "./slice";
import { IMovies } from "../../../interface/IMovie";
import { GetPopularMovies } from '../../../../services/movies/getPopularMovies'
import { GetMovieDetailsById } from '../../../../services/movies/getMovieDetailsById'
import { IDetailedMovie } from "../../../interface/IDetailedMovie";
import { GetSimilarMoviesById } from "../../../../services/movies/getSimilarMoviesById"
import { GetFindMovieByName } from "../../../../services/movies/getFindMovieByName"

function* getPopularMovies(action: any) {
  const method = "[🎥] getPopularMovies"
  console.log(method);

  const url = `/movie/popular?page=${action.payload}`

  try {
    yield put(moviesActions.setIsLoading(true))

    const data: IMovies = yield call(GetPopularMovies, url)
    console.log(`${method} - getPopularMovies: ${JSON.stringify(data, null, 2)}`);

    yield put(moviesActions.setMoviesList(data));
  } catch (error) {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* getMovieDetailsById(action: any) {
  const method = "[🎥] getMovieDetailsById"
  console.log(method);

  const url = `/movie/${action.payload}`

  try {
    yield put(moviesActions.setIsLoading(true))

    const data: IDetailedMovie = yield call(GetMovieDetailsById, url)
    console.log(`${method} - getMovieDetailsById: ${JSON.stringify(data, null, 2)}`);

    yield put(moviesActions.setMovieDetails(data));
  } catch (error) {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* getSimilarMoviesById(action: any) {
  const method = "[🎥] getSimilarMoviesById"
  console.log(method);

  const url = `/movie/${action.payload}/similar`

  try {
    yield put(moviesActions.setIsLoading(true))

    const data: IDetailedMovie = yield call(GetSimilarMoviesById, url)
    console.log(`${method} - getSimilarMoviesById: ${JSON.stringify(data, null, 2)}`);

    yield put(moviesActions.setSimilarMovies(data));
  } catch (error) {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* getFindMovieByName(action: any) {
  const method = "[🎥] getFindMovieByName"
  console.log(method); 
  const url = `search/movie?query=${action.payload.query}&page=${action.payload.page}`

  try {
    yield put(moviesActions.setIsLoading(true))

    const data: IDetailedMovie = yield call(GetFindMovieByName, url)
    console.log(`${method} - getFindMovieByName: ${JSON.stringify(data, null, 2)}`);

    yield put(moviesActions.setMoviesList(data));
  } catch (error) {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - error: ${error}`);
    console.log(`${method} - error: ${JSON.stringify(error, null, 2)}`);
  } finally {
    yield put(moviesActions.setIsLoading(false));
    console.log(`${method} - end`);
  }
}

function* watchGetPopularMovies() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_MOVIES, getPopularMovies);
}

function* watchGetMovieDetailsById() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_MOVIE_DETAILS_BY_ID, getMovieDetailsById)
}

function* watchGetSimilarMoviesById() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_SIMILAR_MOVIES_BY_ID, getSimilarMoviesById)
}

function* watchGetFindMovieByName() {
  yield takeLatest(SAGAS_FLOW_NAMES.GET_FIND_MOVIE_BY_NAME, getFindMovieByName)
}

export const moviesSagas = [fork(watchGetPopularMovies), fork(watchGetMovieDetailsById), fork(watchGetSimilarMoviesById), fork(watchGetFindMovieByName)]