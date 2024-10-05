import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ShowsContext = React.createContext()

export default function ShowsContextProvider({children}){
    const [topShows ,setTopShows] = useState([]);
    const [nowShows , setNowShows] = useState([]);
    const [popShows , setPopShows] = useState([]);
    const [comingShows ,setComingShows] = useState([]);

    async function getTopShows() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${apiKey}`);
            setTopShows(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getPopShows() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`);
            setPopShows(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getnowShows() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`);
            setNowShows(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }
    async function getComingShows() {
        const apiKey = '6f726b57d050b9b6dca6201724d9b43d'
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&page=1`);
            setComingShows(res.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    return <ShowsContext.Provider value={{topShows,nowShows,popShows,getTopShows,getPopShows,getnowShows  ,getComingShows , comingShows}}>
        {children}
    </ShowsContext.Provider>
}