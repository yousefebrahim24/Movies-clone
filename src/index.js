import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MoviesContextProvider from './Context/moviesContext';
import ShowsContextProvider from './Context/tvContext';
import SearchContextProvider from './Context/searchContext';
import VideoContextProvider from './Context/videoContext';
import UserContextProvider from './Context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesContextProvider>
      <ShowsContextProvider>
        <SearchContextProvider>
          <VideoContextProvider>
              <UserContextProvider>
                  <App />
              </UserContextProvider>
          </VideoContextProvider>
        </SearchContextProvider>
      </ShowsContextProvider>
    </MoviesContextProvider>
  </React.StrictMode>
);

reportWebVitals();
