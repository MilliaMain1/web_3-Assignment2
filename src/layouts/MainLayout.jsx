import { Link, Outlet } from "react-router";
import { useFavorite } from "../hooks/useFavorite";
import { useState } from "react";
import FavoritesModal from "../components/FavoritesModal";
/*
 * MainLayout
 * Used as a layout for all pages except the login page
 *
 * */
export default function MainLayout() {
    const [favorites, setFavorites, toggleFavorites, isFavorited, isEmpty] = useFavorite(); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpen = () => {
        setIsModalOpen(true)
    }
    const handleClose = () => {
        setIsModalOpen(false);
    }
    return (
        <div className="w-screen h-screen flex flex-col">
            <FavoritesModal isOpen={isModalOpen} handleClose={handleClose} />
            <header className="min-h-24 flex justify-between place-items-center mx-4">
                <h1 className="flex-grow text-3xl font-bold w-screen">Painting Finder</h1>
                <nav className="flex gap-4">
                    <Link to="/painting">Paintings</Link>                
                    <Link to="/gallery">Galleries</Link>                
                    <Link to="/artist">Artists</Link>
                    <Link to="/genre">Genres</Link>                
                    <Link to="/about">About</Link>              
                    {!isEmpty() ? (<button className="link" onClick={handleOpen} to="/favorites">Favorites</button>) : ""}
                </nav>
            </header> 
            <main className="h-7/8 h-7/8 p-4">
                <Outlet />
            </main>
        </div>
    )
}
