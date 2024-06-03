import { useDispatch, useSelector } from 'react-redux'
import './SimilarMovies.scss'
import { moviesSagaActions, moviesSelector } from '../../../redux/saga/movies/slice/moviesSlice'
import FilmCard from '../../FilmCard/FilmCard'
import { useEffect } from 'react'

export default function SimilarMovies() {
  const similar_movies = useSelector(moviesSelector.getSimilarMoviesId)
  const movie = useSelector(moviesSelector.getMovie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesSagaActions.sagaGetSimilarMoviesById(movie.id))
  }, [movie])

  return (
    <div className='similar_movies_container'>
      <h2>Similar movies</h2>
      <div className='similar_movies_container__movies'>
        {similar_movies?.results?.length > 0 ? similar_movies?.results?.map(movie => (
          <FilmCard disable_desc {...movie} key={movie?.id} />
        )) : (
          <p>{"No similar movies were found :("}</p>
        )}
      </div>
    </div>
  )
}
