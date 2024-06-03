import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../../FilmCard/FilmCard";
import "./FilmsGrid.scss";
import {
  moviesSagaActions,
  moviesSelector
} from "../../../redux/saga/movies/slice/moviesSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilmsGrid() {
  const movies = useSelector(moviesSelector.getMovies);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || '1');
  const search = searchParams.get("search")

  useEffect(() => {
    if (search) {
      dispatch(moviesSagaActions.sagaFindMovieByName(search, page))
    } else {
      dispatch(moviesSagaActions.sagaGetMovies(page));
    }
  }, [page, search]);

  return (
    <div className="movies_grid_container">
      <div className="movies_grid_container__movies_grid">
        {movies?.results?.length > 0 ? movies?.results?.map((movie) => (
          <FilmCard {...movie} key={movie.id} />
        )) : (
          <p style={{ alignSelf: 'center' }}>No movies found with name "{search}"</p>
        )}
      </div>
      
    </div>
  );
}
