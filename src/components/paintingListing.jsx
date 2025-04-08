const addDefaultImg = ev => {
   ev.target.src = "https://static.thenounproject.com/png/2616533-200.png"
}
export default function PaintingListing({painting, handleOpen, limitWidth}){
        const paddedImgId = painting.imageFileName.toString().padStart(6, "0")
        const imgSrc = `/art-images/paintings/square/${paddedImgId}.jpg`
    return (
        <li 
            className="flex place-items-center content-center hover:bg-neutral-300 m-4 p-2 rounded w-full max-w-[30vw] gap-4"
            onClick={() => handleOpen(painting)}
        >
            <img className="h-24 w-24" onError={addDefaultImg} src={imgSrc} />
            <div>
                <h4 className="text-lg font-bold">{painting.title}</h4>
                <h5 className="text-md">{painting.artist.firstName} {painting.artist.lastName} </h5>
                <h5 className="text-md">{painting.yearOfWork}</h5>
            </div> 
        </li>
    )
}
