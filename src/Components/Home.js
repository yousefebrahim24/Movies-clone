import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Loading from "./Load";


export default function Home() {
  const [categories, setCategories] = useState([]); //storing categories only
  const [popularMovies, setPopularMovies] = useState([]); // storing All Movies only
  const [moviesByCategory, setMoviesByCategory] = useState([]); // filter All Movies based on category

  async function homeData() {
    const apiKey = '6f726b57d050b9b6dca6201724d9b43d';
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    try {
      // Fetch All categories id , name  => id:10 , type:action
      const categoryResponse = await axios.get(genreUrl);
      const genres = categoryResponse.data.genres;
      setCategories(genres);
      console.log("Genres:", genres);

      // Fetch All popular movies => all Movies
      const popularResponse = await axios.get(popularUrl);
      const popularMoviesResult = popularResponse.data.results;
      setPopularMovies(popularMoviesResult);
      console.log("Popular Movies:", popularMoviesResult);

      // Group of movies with the same category  ***filteration step
      // loop on all categories then check if movie has same id  movieId === categoryId
      const moviesByCategory = genres.map(genre => ({
        title: genre.name,
        movies: popularMoviesResult.filter(movie => movie.genre_ids.includes(genre.id))
      }));

      setMoviesByCategory(moviesByCategory);
      console.log("Movies by Category:", moviesByCategory);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    homeData();
  }, []);

  return (
    <div className="container text-light" id="home-page">
      {moviesByCategory.length > 0 ? (
        moviesByCategory.map((category, index) =>
          (category.movies.length && category.title!='Romance' && category.title !='Drama')> 0 && (
            <div key={index} className="category my-2 p-1">
              <h3 className="py-3"><span className="text-warning">{category.title}</span> Movies</h3>
                <div className="container" id="posters">
                    <Slider {...settings}>
                        {category.movies.map((movie, subIndex) => (
                        <div key={subIndex} className="px-1">
                            <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                            className="card-img-top w-100"
                            />
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
          )
        )
      ) : (
          <Loading />
      )}
    </div>
  );
}