import { useContext } from "react";
import { GenreContext } from "../contexts/Contexts";

export default function GenreList({genres}){
    const {activeGenre, setActiveGenre} = useContext(GenreContext);
    const handleClick = (genre) => {
        setActiveGenre(genre)
    }
    return (
        <ul className="h-full overflow-scroll w-1/4">
            {genres ? genres.map((genre, idx) => (
                <li className="listing" key={idx} onClick={() => handleClick(genre)}>{genre.genreName}</li> 
            )) : "Loading"} 
        </ul>
    )
}
