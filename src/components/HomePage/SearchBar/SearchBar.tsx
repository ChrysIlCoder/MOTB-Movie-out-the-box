import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PagesSwitch from "../PagesSwitch/PagesSwitch";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { moviesSagaActions } from "../../../redux/saga/movies/slice/moviesSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

interface ISearchBarProps {
  no_pages?: boolean;
}

export default function SearchBar({ no_pages }: ISearchBarProps) {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" })
  const search = searchParams.get("search")
  const page = parseInt(searchParams.get("page") || '1')

  const { handleSubmit, register, setValue } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSearchSubmit = (data: any) => {
    setSearchParams({ search: data.search, page: '1' })
    dispatch(moviesSagaActions.sagaFindMovieByName(data.search, page));
  }

  const handleHomeClick = () => {
    navigate('/')
    setValue('search', '')
  }

  return (
    <div className="search_bar_container">
      <form
        onSubmit={handleSubmit(handleSearchSubmit)}
        className="search_bar_container__search_bar_container"
      >
        {search && (
          <button
            type="button"
            className="search_bar_container__search_bar_container__home_button"
            onClick={handleHomeClick}
          >
            Home
          </button>
        )}
        <input
          className="search_bar_container__search_bar_container__search_bar"
          type="search"
          placeholder="Search"
          {...register("search", { required: true })}
        />
        <button
          type="submit"
          className="search_bar_container__search_bar_container__search_button"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      {!no_pages && <PagesSwitch />}
    </div>
  );
}
