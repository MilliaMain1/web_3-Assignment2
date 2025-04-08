import { useContext } from "react"
import { ArtistContext } from "../contexts/Contexts"


export default function ArtistListing({artist}) {
    const {activeArtist, setActiveArtist} = useContext(ArtistContext)
    const handleClick = () => {
        setActiveArtist(artist)
    }
    const imgSrc = `/art-images/artists/full/${artist.artistId}.jpg`
    return (
        <li className="listing flex align-center" onClick={handleClick} >
            <img className="h-24 w-24 mr-4" src={imgSrc} /> 
            {artist.lastName} {artist.firstName}
        </li>
    )
}
