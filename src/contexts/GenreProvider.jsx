import { useState } from "react";
import { GenreContext } from "./Contexts";


export default function GenreProvider({children}) {

    const [activeGenre, setActiveGenre] = useState(null);
    return (
        <GenreContext.Provider value={{activeGenre, setActiveGenre}}>
            {children}
        </GenreContext.Provider>
    )
}
