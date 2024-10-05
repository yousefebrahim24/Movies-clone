import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const MoviesContext = React.createContext();

export default function MoviesContextProvider({ children }) {
    const [topMovies, setTopMovies] = useState([]);
    const [nowMovies , setNowMovies] = useState([]);
    const [popMovies , setPopMovies] = useState([]);
    const [comingMovies ,setComingMovies] = useState([]);

    async function getTopMovies() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`);
            setTopMovies(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getPopMovies() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`);
            setPopMovies(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getNowMovies() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`);
            setNowMovies(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getComingMovies() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`);
            setComingMovies(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <MoviesContext.Provider value={{ topMovies, getTopMovies ,  nowMovies, getNowMovies ,  popMovies, getPopMovies ,comingMovies ,getComingMovies}}>
            {children}
        </MoviesContext.Provider>
    );
}
