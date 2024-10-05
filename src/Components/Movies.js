import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Context/moviesContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Load";
import { SearchContext } from "../Context/searchContext";

export default function Movies(){
    const navigate = useNavigate()
    const [isLoad , setLoad] = useState(true)
    const { topMovies, getTopMovies ,  nowMovies, getNowMovies ,  popMovies, getPopMovies}= useContext(MoviesContext)
    const {searchResult} = useContext(SearchContext)
   
    useEffect(()=>{
        getTopMovies();
    },[getTopMovies])
    useEffect(()=>{
        getPopMovies();
    },[getPopMovies])
    useEffect(()=>{
        getNowMovies();
    },[getNowMovies])
    useEffect(()=>{
        if(topMovies && nowMovies && popMovies){
            setLoad(false)
        }
    },[])

    function toDiplayMovie(id){
        navigate(`/DisplayMovie/${id}`)
    }
    return(
    <>
        {isLoad?<Loading />:(
       searchResult === null || searchResult.length === 0 ?(
        <>
            <div id="moviesPage" className="container my-5">
                <h4 className="text-warning">Explore the Top Movies Currently in Theaters</h4>
                <div className="Movies p-3">
                    {topMovies.map((movie)=>(
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
            <h4 className="text-warning">In Theaters Now: See What's Playing Today</h4>
                <div className="Movies p-3">
                    {nowMovies.map((movie)=>(
                        <div className="movie text-center" key={movie.id} onClick={()=>toDiplayMovie(movie.id)}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie title" className="w-100"/>
                            <div className="overlay text-light">
                                <h5 className="text-center py-4 my-5">{movie.title}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div id="moviesPage" className="container my-5">
            <h4 className="text-warning">Top Hits: Movies Everyone's Talking About</h4>
                <div className="Movies p-3">
                    {popMovies.map((movie)=>(
                        <div className="movie text-center" key={movie.id} onClick={()=>toDiplayMovie(movie.id)}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie title" className="w-100"/>
                            <div className="overlay text-light">
                                <h5 className="text-center py-4 my-5">{movie.title}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>):(
            <div id="moviesPage" className="container my-5">
             <h4 className="text-warning">Explore the Top Movies Currently in Theaters</h4>
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