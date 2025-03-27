import { useContext } from "react"
import { ArtistContext } from "../contexts/Contexts"


export default function ArtistListing({artist}) {
    const {activeArtist, setActiveArtist} = useContext(ArtistContext)
    const handleClick = () => {
        setActiveArtist(artist)
    }
    return (
        <li className="listing" onClick={handleClick} >{artist.lastName} {artist.firstName}</li>
    )
}
