import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Load";
import { VideoContext } from "../Context/videoContext";
import { Link } from "react-router-dom";

export default function DisplayMovie() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoad, setLoad] = useState(true);
    const {getVideo ,video} = useContext(VideoContext)

    async function getMovie(movieId) {
        const key = '6f726b57d050b9b6dca6201724d9b43d';
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`; // Removed the extra '}'
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setItem(result);
            setLoad(false); 
            console.log(result);
        } catch (error) {
            console.error('Error fetching movie details:', error);
            setLoad(false);
        }
    }

    useEffect(() => {
        getMovie(id);
    }, [id]);

    useEffect(()=>{
        getVideo(id)
    },[id])

    return (
    <>
    {isLoad? <Loading />:(
        item &&(
        <div className="container d-flex justify-content-center align-items-center w-100 p-0 m-auto my-3 " id="displayMovie">
             <img  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="movie poster"/>
            <div className="container p-3 mx-2" id="info">
                <h3 className="text-warning">{item.title}</h3>
                <p className="fs-6">{item.overview.slice(0,100)} ...</p>
                <h5>Genres: {item.genres.map(genre => genre.name).join(', ')}</h5>
                <h5>Release Date: {item.release_date}</h5>
                <h5>Rating: {item.vote_average?.toFixed(1)} <i className="fa fa-star text-warning" aria-hidden="true"></i></h5>
                <h5>Country: {item.production_countries[0].name}</h5>
                <h5>Languages: {item.spoken_languages.map(lan=>lan.name).join(', ')}</h5>
                <a href={video} ><button type="button" className="btn btn-warning fs-5">Youtube</button></a>
            </div>
        </div>
        ))
    }
    </>
    );
}
