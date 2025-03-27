import {createContext} from "react";

import GalleryList from "../components/GalleryList";
import { useState } from "react";
import GalleryProvider from "../contexts/GalleryProvider.jsx";
import ActiveGallery from "../components/ActiveGallery.jsx";
import GalleryPaintings from "../components/GalleryPaintings.jsx";

export default function GalleryPage(){ 
    return (
        <GalleryProvider> 
           <div className="flex gap-2 w-full items-stretch max-h-full">
                <div className="w-1/4 border">
                    <GalleryList  />
                </div>
                <div className="flex gap-4 flex-1 border max-h-full">
                    <ActiveGallery className="" /> 
                    <GalleryPaintings className="" />    
                </div>
            </div>
        </GalleryProvider>
    )
}
