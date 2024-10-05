import React, { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
    const [searchResult, setSearchResult] = useState(null);
    
    async function search(value) {
        const key = '6f726b57d050b9b6dca6201724d9b43d';
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${value}`);
            console.log(res.data.results);
            setSearchResult(res.data.results);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <SearchContext.Provider value={{ searchResult, search }}>
            {children}
        </SearchContext.Provider>
    );
}
