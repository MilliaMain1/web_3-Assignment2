import { useContext } from "react"
import { GalleryContext } from "../contexts/Contexts"
export default function SingleGallery({gallery}) {
    const {activeGallery, setActiveGallery} = useContext(GalleryContext);

    return (
        <div className="p-2 hover:bg-neutral-300 cursor-pointer" onClick={() => setActiveGallery(gallery)}>{gallery.galleryName}</div>
    )
}
