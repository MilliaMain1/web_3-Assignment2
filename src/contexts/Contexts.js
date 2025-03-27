import { createContext } from "react";


export const GalleryContext = createContext(null);
export const GenreContext = createContext(null);
export const ArtistContext = createContext(null);
export const FavoriteContext = createContext(
    {
        artists: [],
        galleries: [],
        paintings: [],
    }
)
