import { Link, Outlet } from "react-router";
import { useFavorite } from "../hooks/useFavorite";
import { useState } from "react";
import FavoritesModal from "../components/FavoritesModal";

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
            <header className="">
                <h1>Here is the top of the main layout </h1>
                <nav className="flex gap-4">
                    <Link to="/painting">Paintings</Link>                
                    <Link to="/gallery">Galleries</Link>                
                    <Link to="/artist">Artists</Link>
                    <Link to="/genre">Genres</Link>                
                    <Link to="/about">About</Link>              
                    {!isEmpty() ? (<button className="link" onClick={handleOpen} to="/favorites">Favorites</button>) : ""}
                </nav>
            </header> 
            <main className="max-h-full max-w-full p-4">
                <Outlet />
            </main>
        </div>
    )
}
