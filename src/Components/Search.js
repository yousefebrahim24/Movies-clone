import React, { useContext } from "react";
import { SearchContext } from "../Context/searchContext";

export default function SearchBox() {
    const { search } = useContext(SearchContext);
    
    return (
        <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => search(e.target.value)}
        />
    );
}
