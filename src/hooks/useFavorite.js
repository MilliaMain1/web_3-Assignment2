import { useContext } from "react";
import { FavoriteContext } from "../contexts/Contexts";


const idMap = {
    paintings: "paintingId",
    galleries: "galleryId",
    artists: "artistId"

}
export function useFavorite(){
    const {favorites, setFavorites} = useContext(FavoriteContext);
    

    const toggleFavorite = (type, value) => {
        const indexName = idMap[type];
        const index = favorites[type].findIndex((v) => {
            return v[indexName] == value[indexName]
        }); 
        if(index === -1) {//Is not in favorites
            //There is a lot of copying happening here, concider changing logic
            let newFavorites = {...favorites};
            newFavorites[type].push(value)
            setFavorites(newFavorites)
        }
        else{//Is in favorites
            let newFavorites = {...favorites}
            newFavorites[type].splice(index, 1);
            setFavorites(newFavorites);
        }
        return index <= -1; //Return true if the item is in favorites
    };
    const isFavorited = (type, value) => {
        const indexName = idMap[type];
        return favorites[type].findIndex((v) => {
            return v[indexName] == value[indexName]
        }) !== -1;

    }
    const isEmpty = () => {
        return favorites.paintings.length == 0 && 
        favorites.galleries.length == 0 && 
        favorites.artists.length == 0
    }
    return [favorites, setFavorites, toggleFavorite, isFavorited, isEmpty];
}
