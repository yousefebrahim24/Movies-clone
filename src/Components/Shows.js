import React, { useContext, useEffect, useState } from "react";
import { ShowsContext } from "../Context/tvContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Load";
import { SearchContext } from "../Context/searchContext";

export default function Shows(){
    const [isLoad, setLoad] = useState(true)
     const {topShows,nowShows,popShows,getTopShows,getPopShows,getnowShows} = useContext(ShowsContext)
     const {searchResult} = useContext(SearchContext)
     useEffect(()=>{
        if(topShows && popShows && nowShows ){
            setLoad(false)
        }
     },[])

     useEffect(()=>{
        getTopShows()
     },[getTopShows])
     useEffect(()=>{
        getPopShows()
     },[getPopShows])
     useEffect(()=>{
        getnowShows()
     },[getnowShows])
    return(
        <>
        {isLoad? <Loading /> :(
        searchResult === null || searchResult.length === 0 ?(
        <>
            <div id="moviesPage" className="container my-5">
                <h4 className="text-warning">Top Trending TV Shows: Must-See Picks</h4>
                <div className="Movies p-3">
                    {topShows.map((movie)=>(
                        <div className="movie text-center" key={movie.id}>
                            <p className="position-absolute bg-dark py-1">
                                {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </p>
                            <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.name} className="w-100"/>
                            <div className="overlay">
                                <h5 className="text-center py-4 my-5">{movie.name}</h5>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div id="moviesPage" className="container my-5">
            <h4 className="text-warning">TV Shows Playing Now: What’s Streaming Live</h4>
                <div className="Movies p-3">
                    {nowShows.map((movie)=>(
                        <div className="movie text-center" key={movie.id} >
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
            <div id="moviesPage" className="container my-5">
            <h4 className="text-warning">Popular TV Shows: What Everyone's Watching</h4>
                <div className="Movies p-3">
                    {popShows.map((movie)=>(
                        <div className="movie text-center" key={movie.id} >
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
        </>):(
            <div id="moviesPage" className="container my-5">
             <h4 className="text-warning">Top Trending TV Shows: Must-See Picks</h4>
             <div className="Movies p-3">
                 {searchResult.map((movie)=>(
                     <div className="movie text-center" key={movie.id}>
                         <p className="position-absolute bg-dark py-1">
                             {movie.vote_average.toFixed(2)} <i className="fa fa-star text-warning" aria-hidden="true"></i>
                         </p>
                         <img  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.name} className="w-100"/>
                         <div className="overlay">
                             <h5 className="text-center py-4 my-5">{movie.title}</h5>
                         </div>
                     </div>
                 ))
                 }
             </div>
            </div>
        )
        )
        }
    </>
    )
}