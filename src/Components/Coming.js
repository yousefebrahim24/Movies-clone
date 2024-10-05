import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Context/moviesContext";
import { ShowsContext } from "../Context/tvContext";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/searchContext";
import Loading from "./Load";

export default function ComingSoon(){
    const{comingMovies , getComingMovies} = useContext(MoviesContext)
    const{comingShows , getComingShows} = useContext(ShowsContext)
    const {searchResult} = useContext(SearchContext)
    const navigate = useNavigate()
    const [isLoad, setLoad] = useState(true)

    useEffect(()=>{
        getComingMovies();
    },[getComingMovies])
    useEffect(()=>{
        getComingShows();
    },[getComingShows])

    useEffect(()=>{
       if(comingMovies  && comingShows){
        setLoad(false)
       }
    },[getComingMovies , getComingShows])

    function toDiplayMovie(id){
        navigate(`/DisplayMovie/${id}`)
    }
    return(
    <>
    {isLoad? <Loading /> :(
        searchResult===null || searchResult.length===0?(
        <>
            <div id="moviesPage" className="container my-5">
                <h4 className="text-warning">Get Ready: Exciting Movies Coming Your Way</h4>
                <div className="Movies p-3">
                    {comingMovies.map((movie)=>(
                        <div className="movie text-center" key={movie.id} onClick={()=>toDiplayMovie(movie.id)}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie title" className="w-100"/>
                            <div className="overlay">
                                <h5 className="text-center py-4 my-5">{movie.title}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div id="moviesPage" className="container my-5">
            <h4 className="text-warning">Get Ready: Exciting TV Shows Coming Your Way</h4>
                <div className="Movies p-3">
                    {comingShows.map((movie)=>(
                        <div className="movie text-center" key={movie.id} onClick={()=>toDiplayMovie(movie.id)}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie title" className="w-100"/>
                            <div className="overlay">
                                <h5 className="text-center py-4 my-5">{movie.name}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
        ):(
            <div id="moviesPage" className="container my-5">
                <h4 className="text-warning">Get Ready: Exciting Movies Coming Your Way</h4>
                <div className="Movies p-3">
                    {searchResult.map((movie)=>(
                        <div className="movie text-center" key={movie.id} onClick={()=>toDiplayMovie(movie.id)}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie title" className="w-100"/>
                            <div className="overlay">
                                <h5 className="text-center py-4 my-5">{movie.title}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    )}
    </>
    )
}