import { useContext, useState, useEffect } from "react";
import { GenreContext } from "../contexts/Contexts";
import api from "../lib/api";
import PaintingList from "./PaintingList";

export default function GenrePaintings({source}) {
    const {activeGenre, setActiveGenre} = useContext(GenreContext);
    const [paintings, setPaintings] = useState([]); 

    useEffect(() => {
        if(activeGenre === null) return; 
        api.paintings.getByGenre(activeGenre.genreId)
            .then((res) => {
                console.log(res)
                setPaintings(res);
            })
        }, [activeGenre]);
     
    return (
        <PaintingList paintings={paintings} /> 
    )
}
