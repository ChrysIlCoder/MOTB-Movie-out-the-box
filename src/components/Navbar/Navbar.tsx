import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.scss'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface INavbarProps {
  movie_title: string;
}

export default function Navbar({ movie_title }: INavbarProps) {
  return (
    <div className='navbar_container'>
      <div className='navbar_container__left_header' onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Go Back</span>
      </div>
      <div className='navbar_container__center_header'>
        <h1>{movie_title}</h1>
      </div>
    </div>
  )
}
