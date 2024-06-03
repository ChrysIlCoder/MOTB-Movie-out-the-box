import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { moviesSagaActions, moviesSelector } from '../redux/saga/movies/slice/moviesSlice'
import MoviePageLayout from '../components/Layouts/MoviePageLayout/MoviePageLayout'
import Navbar from '../components/Navbar/Navbar'
import FilmInfo from '../components/MoviePage/FilmInfo/FilmInfo'
import SimilarMovies from '../components/MoviePage/SimilarMovies/SimilarMovies'

export default function MoviePage() {
  const { id } = useParams() 

  const movie = useSelector(moviesSelector.getMovie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesSagaActions.sagaGetMovieDetailsById(id))
  }, [id])

  return (
    <MoviePageLayout>
      <Navbar movie_title={movie.title} />
      <FilmInfo />
      <SimilarMovies />
    </MoviePageLayout>
  )
}
