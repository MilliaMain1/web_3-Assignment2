import { useEffect } from "react";
import { useState } from "react";
import ArtistList from "../components/ArtistList";
import api from "../lib/api"
import ActiveArtist from "../components/ActiveArtist";
import ArtistProvider from "../contexts/ArtistProvider"
import ArtistPaintings from "../components/ArtistPaintings";

export default function ArtistPage() {
    const [artists, setArtists] = useState();

    useEffect(() => {
        api.artists.getAll()
            .then((res) => {
                setArtists(res);
            })
    }, [])

    return (
        <ArtistProvider>
            <div className="flex gap-2 w-full items-stretch max-h-full">
                <ArtistList artists={artists} />
                <div className="flex flex-grow border">
                    <ActiveArtist /> 
                    <ArtistPaintings /> 
                </div>
            </div>
        </ArtistProvider>
    )

}

