import { useContext, useState, useEffect } from "react";
import { FavoriteContext, GalleryContext } from "../contexts/Contexts";
import LocationMap from "./LocationMap";
import { useFavorite } from "../hooks/useFavorite";
import FavoriteButton from "./FavoriteButton";
export default function ActiveGallery({}) {
    const {activeGallery, setActiveGallery} = useContext(GalleryContext);
     
    if (activeGallery !== null) {
        return (
           <div className="mx-auto p-4 w-full h-2/3 flex flex-col">
               <section className="text-lg">
                    <h3 className="text-2xl">{activeGallery.galleryName} ({activeGallery.galleryNativeName})</h3>
                    <p className="text-xl">{activeGallery.galleryCity}</p> 
                    <p><a className="text-blue-500 underline" href={activeGallery.galleryWebSite}>Gallery Link</a></p> 
                    <FavoriteButton favKey={"galleries"} value={activeGallery} /> 
                </section>
                <div className="w-full h-full flex-grow">
                    <LocationMap lat={activeGallery.latitude} lng={activeGallery.longitude} /> 
                </div>
           </div>  
        )
    }
}
