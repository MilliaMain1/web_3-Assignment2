import { useContext, useState } from "react";
import { useFavorite } from "../hooks/useFavorite";
import { ArtistContext } from "../contexts/Contexts";
import FavoriteButton from "./FavoriteButton";


export default function ActiveArtist(){
    const {activeArtist, setActiveArtist} = useContext(ArtistContext);
    const [favorites, setFavorites, toggleFavorites, isFavorited] = useFavorite(); 
    const [favoritesMessage, setFavoritesMessage] = useState("");

    if (activeArtist === null) return;

    const artist = activeArtist; //This is done to make the markup slightly more consise
    const imgSrc = `/art-images/artists/full/${artist.artistId}.jpg`
    return (
        <section className="mx-auto p-4 w-full h-2/3 flex flex-col gap-2">
            <h3 className="text-2xl flex flex gap-2">
                <span>{artist.firstName} {artist.lastName}</span>
                <span>({artist.yearOfBirth} - {artist.yearOfDeath ? artist.yearOfDeath : ""})</span>
                <span>{artist.gender}</span>
            </h3>
            <h4><a href={artist.artistLink}>Wikipedia Link</a></h4>
            <FavoriteButton favKey={"artists"} value={activeArtist} />
            <img className="max-w-96 h-auto" src={imgSrc} />
        </section>
    )     
}
