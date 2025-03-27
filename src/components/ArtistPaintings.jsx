import { useContext, useState, useEffect } from "react";
import { ArtistContext } from "../contexts/Contexts";
import api from "../lib/api";
import PaintingList from "./PaintingList";

export default function ArtistPaintings() {
    const {activeArtist, setActiveArtist} = useContext(ArtistContext);
    const [paintings, setPaintings] = useState([]); 

    useEffect(() => {
        if(activeArtist === null) return; 
        api.paintings.getByArtist(activeArtist.artistId)
            .then((res) => {
                setPaintings(res);
            })
        }, [activeArtist]);
        
    return (
        <PaintingList paintings={paintings} /> 
    )
}
