import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interface/IMovie";
import "./FilmCard.scss";

interface IFilmCardProps {
  disable_desc?: boolean;
}

interface IFilmCardPropsUnited extends IMovie, IFilmCardProps {}

export default function FilmCard({ ...props }: IFilmCardPropsUnited) {
  const navigate = useNavigate()

  return (
    <div className="film_card_container" onClick={() => navigate(`/movie/${props?.id}`)}>
      <img className="film_card_container__poster" src={props?.poster_path ? `https://image.tmdb.org/t/p/original/${props?.poster_path}` : `https://weknowyourdreams.com/images/grey/grey-03.jpg`} alt="" />
      <div className="film_card_container__title_year">
        <h1 className="film_card_container__title_year__title">{props?.title}</h1>
        <span className="film_card_container__title_year__year">{props?.release_date?.slice(0, 4)}</span>
      </div>
      {!props?.disable_desc && (
        <p className="film_card_container__plot">{props?.overview && props?.overview?.slice(0, 150) + '...'}</p>
      )}
      <span className="film_card_container__metascore">Rated: {props?.vote_average?.toFixed(1)}/10</span>
    </div>
  );
}
