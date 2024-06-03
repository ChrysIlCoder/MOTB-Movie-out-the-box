import "./PagesSwitch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { moviesSelector } from "../../../redux/saga/movies/slice/moviesSlice";

export default function PagesSwitch() {
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const movies = useSelector(moviesSelector.getMovies);
  const page = parseInt(searchParams.get("page") || "1");

  const handlePageSwitch = (page: string) => {
    setSearchParams(prev => {
      prev.set("page", page)
      return prev
    });
  };

  return (
    <div className="pages_switch_container">
      <button
        onClick={() => page > 1 && handlePageSwitch((page - 1).toString())}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <span>{page + "/" + movies?.total_pages}</span>
      <button
        onClick={() =>
          page < movies?.total_pages && handlePageSwitch((page + 1).toString())
        }
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
