import { useEffect, useState } from "react";
import { useFavorite } from "../hooks/useFavorite";

export default function FavoriteButton({favKey, value}) {
    const [favorites, setFavorites, toggleFavorites, isFavorited] = useFavorite(); 
    const [favoritesMessage, setFavoritesMessage] = useState("");
    
    useEffect(() => {
        setFavoritesMessage("")
    }, [value])

    const handleFavorites = () => {
        if (toggleFavorites(favKey, value)){
             setFavoritesMessage("Added To Favorites")
        }else {
            setFavoritesMessage("Removed from Favorites")
        }
    }
    return (
        <span>
            <button onClick={handleFavorites} className="button mr-2">
                {isFavorited(favKey, value) ? "Remove Favorite": "Add To Favorites"}
            </button> 
            <span>{favoritesMessage}</span>
        </span>
    )

}
