// http://www.omdbapi.com/?i=tt3896198&apikey=42d9928f

import { useEffect, useState } from "react";
import "../css/style.css";
import searchIcon from "../images/search.svg";
import MovieCard from "./MovieCard";

const ApiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=42d9928f";

// const movie = {
//   title: "Spiderman",
//   year: 2020,
//   imdbID: "idf30329",
//   type: "movie",
//   poster: "N/A", // api response with no image for a certain movie
// };

export default function App() {
  // creating stats
  //* retreive movies and add them to movies array to be rendered in the page
  const [movies, setMovies] = useState([]);
  //* take and validate user input search value and run searchMovies function
  const [searchTerm, setSearchTerm] = useState("");
  // creating search movie function
  const searchMovie = async function (title) {
    const response = await fetch(`${ApiUrl}&s=${title}`);
    const data = await response.json();
    const { Search } = data;
    // add movies to the movies array
    setMovies(Search);
  };
  useEffect(() => {
    document.querySelector(".search-field").focus();
    // running the searchMovie asa the page loads (App component renders )
    // run once
    searchMovie("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          className="search-field"
          placeholder="search fro a movie"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? document.querySelector("search-icon").click()
              : ""
          }
        />
        <img
          className="search-icon"
          src={searchIcon}
          alt="search icon"
          onClick={() =>
            searchTerm.trim() !== "" ? searchMovie(searchTerm) : null
          }
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1> no movie was found</h1>
        </div>
      )}
    </div>
  );
}
