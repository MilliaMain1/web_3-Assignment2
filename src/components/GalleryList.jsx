import { useState, useEffect, useContext } from "react";
import api from "../lib/api";
import SingleGallery from "./SingleGallery";
import { FavoriteContext } from "../contexts/Contexts";

export default function GalleryList(props){
    const [galleries, setGalleries] = useState();
    const {favorites, setFavorites} = useContext(FavoriteContext)

    useEffect(() => {
        api.galleries.getAll()
            .then((res) => {
                setGalleries(res);
            })
    }, [])
    
    return (
        <ul className="h-full overflow-scroll">
            {galleries ? galleries.map((gallery, idx) => (
                <SingleGallery key={idx} gallery={gallery} /> 
            )) : "Loading"} 
        </ul>
    ) 
}
