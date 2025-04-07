import { useState, createContext } from 'react'

import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './pages/login.jsx';
import MainLayout from "./layouts/MainLayout"
import './index.css'
import GalleryPage from './pages/gallery.jsx';
import { FavoriteContext } from './contexts/Contexts.js';
import ArtistPage from './pages/artists.jsx';
import GenrePage from './pages/genres.jsx';
import PaintingsPage from './pages/paintings.jsx';
import FavoritesModal from './components/FavoritesModal.jsx';

function App() {
    const [favorites, setFavorites] = useState({
        paintings: [],
        galleries: [],
        artists: []
    });

    const [isModalOpen, setItModalOpen] = useState(false);

    return (
        <FavoriteContext.Provider value={{favorites, setFavorites}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route element={<MainLayout />}> 
                        <Route path="gallery" element={<GalleryPage />} />
                        <Route path="artist" element={<ArtistPage />} />
                        <Route path="genre" element={<GenrePage />} />
                        <Route path="painting" element={<PaintingsPage />} />
                    </Route> 
                </Routes>            
            </BrowserRouter>
        </FavoriteContext.Provider>
    )
}

export default App
