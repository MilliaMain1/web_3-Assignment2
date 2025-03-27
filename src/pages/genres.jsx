import { useEffect, useState } from "react";
import GenreProvider from "../contexts/GenreProvider";
import GenreList from "../components/GenreList";
import api from "../lib/api";
import ActiveGenre from "../components/ActiveGenre";
import GenrePaintings from "../components/GenrePaintings";


export default function GenrePage() {
    const [genres, setGenres] = useState();

    useEffect(() => {
        api.genres.getAll()
            .then((res) => {
                setGenres(res);
            })
    }, [])
    return (
        <GenreProvider> 
            <div className="flex gap-2 w-full items-stretch max-h-full">
                <GenreList className="w-1/4" genres={genres} />
                <div className="w-3/4">
                    <ActiveGenre />
                    <GenrePaintings />
                </div>
            </div> 
        </GenreProvider>
    )
}
