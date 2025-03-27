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
            className="fixed flex justify-center content-center top-0 left-0 z-[1001] w-screen h-screen bg-black/[0.5] "
        >
            <div classname="rounded-xl w-1/3 h-min bg-white p-4">
                <div classname="flex justify-between place-items.center">
                    <div classname="mb-4">
                        <h3 classname="w-full b-border text-2xl font-bold">{painting.title}</h3>
                        <h3 classname="w-full b-border text-xl font-bold">{painting.artist.firstname} {painting.artist.lastname}</h3>
                    </div>
                    <button classname="button h-min" onclick={handleclose}>x</button>
                </div>
                <div classname="flex gap-4">
                    <section>
                        <p><strong>year of work: </strong> {painting.yearofwork}</p>
                        <p><strong>medium: </strong> {painting.medium}</p>
                        <p><strong>gallery: </strong> {painting.gallery.galleryname} | {painting.gallery.gallerycity}, {painting.gallery.gallerycountry}</p>
                        <p><a href={painting.wikilink}>wiki link</a></p>
                        <p><a href={painting.museumlink}>museum link</a></p>
                        <div>
                            <favoritebutton favkey={"paintings"} value={painting} />
                        </div>
                    </section>
                    <defaultimage src={imgsrc} />
                </div>
                <div>
                    {painting.description ? (<><strong>descrpiton:</strong><p>{painting.description}</p></>) : ""}
                </div>
            </div>
        </div>
    )
}
