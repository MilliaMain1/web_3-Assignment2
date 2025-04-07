import { useEffect, useState } from "react";
import api from "../lib/api";
import DefaultImage from "./DefaultImage";
import { FavoriteContext } from "../contexts/Contexts";
import { useFavorite } from "../hooks/useFavorite";
import FavoriteButton from "./FavoriteButton";

export default function PaintingModal({paintingInfo, handleClose}) {
    const [painting, setPainting] = useState(null);
    useEffect(() => {
        if(paintingInfo === null) return;
        api.paintings.getFull(paintingInfo.paintingId)
            .then((res) =>{
                setPainting(res)
            })

    },[paintingInfo])

    if(paintingInfo === null || painting === null) return;

    const imgSrc = `https://res.cloudinary.com/funwebdev/image/upload/w_200/art/paintings/${painting.imageFileName}.jpg`
    
        return (
        <div 
            className="fixed flex justify-center content-center top-0 left-0 z-[1101] w-screen h-screen bg-black/[0.5] "
        >
            <div className="rounded-xl w-1/3 h-min bg-white p-4">
                <div className="flex justify-between place-items.center">
                    <div className="mb-4">
                        <h3 className="w-full b-border text-2xl font-bold">{painting.title}</h3>
                        <h3 className="w-full b-border text-xl font-bold">{painting.artist.firstName} {painting.artist.lastName}</h3>
                    </div>
                    <button className="button h-min" onClick={handleClose}>x</button>
                </div>
                <div className="flex gap-4">
                    <section>
                        <p><strong>Year of Work: </strong> {painting.yearOfWork}</p>
                        <p><strong>Medium: </strong> {painting.medium}</p>
                        <p><strong>Gallery: </strong> {painting.gallery.galleryname} | {painting.gallery.galleryCity}, {painting.gallery.galleryCountry}</p>
                        <p><a href={painting.wikilink}>Wiki Link</a></p>
                        <p><a href={painting.museumlink}>Museum Link</a></p>
                        <div>
                            <FavoriteButton favKey={"paintings"} value={painting} />
                        </div>painting
                    </section>
                    <DefaultImage src={imgSrc} />
                </div>
                <div>
                    {painting.description ? (<><strong>Descrpiton:</strong><p>{painting.description}</p></>) : ""}
                </div>
            </div>
        </div>
    )
}
