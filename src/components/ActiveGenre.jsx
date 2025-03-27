import { useContext } from "react";
import { GenreContext } from "../contexts/Contexts";



export default function ActiveGenre() {
    const {activeGenre, setActiveGenre} = useContext(GenreContext);
    console.log(activeGenre)
    if(activeGenre == null) return;

    return (
        <div className="p-4 rounded border w-full h-min">
            <h3 className="text-2xl font-bold">{activeGenre.genreName}</h3>
            <p>{activeGenre.description}</p>
            <p><a href={activeGenre.wikiLink}>Wiki Link</a></p>
        </div>
    )
}
