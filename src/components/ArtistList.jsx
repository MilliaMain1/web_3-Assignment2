import ArtistListing from "./ArtistListing";

export default function ArtistList({artists}) {
    if (artists === undefined) return;

    return (
        <ul className="max-h-full overflow-scroll">
            {artists.map((a, index) => (<ArtistListing key={index} artist={a} />))}
        </ul>
    )
}
