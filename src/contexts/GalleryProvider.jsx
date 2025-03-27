import { useState } from "react";
import { GalleryContext } from "./Contexts";


export default function GalleryProvider({children}) {

    const [activeGallery, setActiveGallery] = useState(null);
    return (
        <GalleryContext.Provider value={{activeGallery, setActiveGallery}}>
            {children}
        </GalleryContext.Provider>
    )
}
