import { useContext } from "react";
import { FavoriteContext } from "../contexts/Contexts";

export function useFavorite(){
    const {favorites, setFavorites} = useContext(FavoriteContext);

    const toggleFavorite = (type, value) => {
        const index = favorites[type].indexOf(value);
        if(index === -1) {
            //There is a lot of copying happening here, concider changing logic
            let newFavorites = {...favorites};
            newFavorites[type].push(value)
            setFavorites(newFavorites)
        }else{
            let newFavorites = {...favorites}
            newFavorites[type].splice(index, 1);
            setFavorites(newFavorites);
        }
        return index <= -1; //Return true if the item is in favorites
    };
    const isFavorited = (type, value) => {
        return favorites[type].indexOf(value) > -1;
    }

    return [favorites, setFavorites, toggleFavorite, isFavorited];
}
