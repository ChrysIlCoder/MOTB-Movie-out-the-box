import { useSelector } from "react-redux";
import "./FilmInfo.scss";
import { moviesSelector } from "../../../redux/saga/movies/slice/moviesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";

export default function FilmInfo() {
  const movie = useSelector(moviesSelector.getMovie);

  return (
    <div className="movie_info_container">
      <img
        className="movie_info_container__banner"
        src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` : `https://weknowyourdreams.com/images/grey/grey-03.jpg`}
        alt="Banner"
        onClick={() => window.open(movie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` : `https://weknowyourdreams.com/images/grey/grey-03.jpg`)}
      />
      <div className="movie_info_container__movie_info">
        <img
          className="movie_info_container__movie_info__poster"
          src={movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : `https://weknowyourdreams.com/images/grey/grey-03.jpg`}
          alt="Poster"
          onClick={() => window.open(movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : `https://weknowyourdreams.com/images/grey/grey-03.jpg`)}
        />
        <div className="movie_info_container__movie_info__info">
          <div className="movie_info_container__movie_info__info">
            <div>
              <h1 className="movie_info_container__movie_info__info__title">
                {movie?.title}
              </h1>
              <p className="movie_info_container__movie_info__info__overview">
                {movie?.overview}
              </p>
            </div>
            <div className="movie_info_container__movie_info__info__genres">
              {movie?.genres?.map((genre) => (
                <span
                  key={genre?.id}
                  className="movie_info_container__movie_info__info__genres__genre"
                >
                  {genre?.name}
                </span>
              ))}
            </div>
            <div>
              <span>
                {movie?.release_date?.slice(0, 4)} • {movie?.popularity} views •{" "}
                {movie?.runtime} minutes
              </span>
            </div>
          </div>
          {movie.homepage && (
            <div>
              <button
                className="movie_info_container__movie_info__info__website"
                onClick={() => window.open(movie.homepage, "_blank")}
              >
                Movie Website <FontAwesomeIcon icon={faGlobe} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
