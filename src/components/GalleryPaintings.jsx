import { useContext, useState, useEffect } from "react";
import { GalleryContext } from "../contexts/Contexts";
import api from "../lib/api";
import PaintingList from "./PaintingList";

export default function GalleryPaintings() {
    const {activeGallery, setActiveGallery} = useContext(GalleryContext);
    const [paintings, setPaintings] = useState([]); 

    useEffect(() => {
        if(activeGallery === null) return; 
        api.paintings.getByGallery(activeGallery.galleryId)
            .then((res) => {
                setPaintings(res);
            })
        }, [activeGallery]);
        
    return (
        <PaintingList paintings={paintings} /> 
    )
}
