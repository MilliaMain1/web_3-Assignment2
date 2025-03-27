import { useState } from "react";
import { ArtistContext } from "./Contexts";


export default function ArtistProvider({children}) {

    const [activeArtist, setActiveArtist] = useState(null);
    return (
        <ArtistContext.Provider value={{activeArtist, setActiveArtist}}>
            {children}
        </ArtistContext.Provider>
    )
}
