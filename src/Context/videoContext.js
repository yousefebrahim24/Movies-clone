import React, { useState } from "react";
import axios from "axios";


export const VideoContext= React.createContext()
export default function VideoContextProvider({children}){
    const [video ,setVideo] = useState(null);

    async function getVideo(movieId) {
        const key = '6f726b57d050b9b6dca6201724d9b43d';
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`);
            console.log(res.data.results); //Array of videos
            const videos = res.data.results;
            if (videos.length > 0) {
                const video = videos[0];
                const videoUrl = `https://www.youtube.com/watch?v=${video.key}`;
                console.log(videoUrl);
                setVideo(videoUrl)
            }
        } catch (error) {
            console.error('Error fetching movie videos:', error);
        }
        
    }
    return(
    <VideoContext.Provider value={{video , getVideo}}>
        {children}
    </VideoContext.Provider>
    );
}