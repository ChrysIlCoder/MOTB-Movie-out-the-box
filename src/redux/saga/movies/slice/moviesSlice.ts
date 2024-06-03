import { createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../../../interface/IMovie";
import { SAGAS_FLOW_NAMES } from "../../saga";
import { IDetailedMovie } from "../../../../interface/IDetailedMovie";

interface IMoviesInitalState {
  isLoading: boolean;
  movies: IMovies;
  movie: IDetailedMovie;
  similar_movies: IMovies;
}

const initialState: IMoviesInitalState = {
  isLoading: false,
  movies: {} as IMovies,
  movie: {} as IDetailedMovie,
  similar_movies: {} as IMovies,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;

      state.movies = {} as IMovies
      state.movie = {} as IDetailedMovie
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setMoviesList: (state, action) => {
      state.movies = action.payload
    },
    setMovieDetails: (state, action) => {
      state.movie = action.payload
    },
    setSimilarMovies: (state, action) => {
      state.similar_movies = action.payload
    }
  }
});

const getIsLoading = ({ movies }: { movies: IMoviesInitalState }) => movies.isLoading;

const getMovies = ({ movies }: { movies: IMoviesInitalState }) => movies.movies;

const getMovie = ({ movies }: { movies: IMoviesInitalState }) => movies.movie;

const getSimilarMoviesId = ({ movies } : { movies: IMoviesInitalState }) => movies.similar_movies

export const moviesSelector = {
  getIsLoading,
  getMovies,
  getMovie,
  getSimilarMoviesId,
};

export const { actions, reducer } = moviesSlice;

export const moviesSagaActions = {
  sagaGetMovies: (page: number | undefined) => ({ type: SAGAS_FLOW_NAMES.GET_MOVIES, payload: page }),
  sagaGetMovieDetailsById: (id: string | undefined) => ({ type: SAGAS_FLOW_NAMES.GET_MOVIE_DETAILS_BY_ID, payload: id }),
  sagaGetSimilarMoviesById: (id: number | undefined) => ({ type: SAGAS_FLOW_NAMES.GET_SIMILAR_MOVIES_BY_ID, payload: id }),
  sagaFindMovieByName: (query: string | null, page: number | null) => ({ type: SAGAS_FLOW_NAMES.GET_FIND_MOVIE_BY_NAME, payload: {query, page} })
};
