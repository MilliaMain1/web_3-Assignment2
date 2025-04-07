import { useEffect } from "react";
import { useFavorite } from "../hooks/useFavorite";
import PaintingList from "./PaintingList";


export default function FavoritesModal({isOpen, handleClose}) {
    const [favorites, setFavorites, toggleFavorites, isFavorited, isEmpty] = useFavorite(); 
    if (!isOpen) return;
    const emptyFavorites = () => {
        setFavorites({
            paintings: [],
            artists: [],
            galleries: []
        }) 
    }
    const listStyling = "p-4 border border-black rounded flex flex-col gap-4 basis-128";
    return (
        <div 
            className="fixed flex justify-center content-center top-0 left-0 z-[1001] w-screen h-screen bg-black/[0.5] "
        >
            <div className="rounded-xl w-2/3 h-min bg-white p-4">
                <header className="flex justify-between place-items.center">
                    <div className="mb-4">
                        <h3 className="w-full b-border text-2xl font-bold">Favorites</h3>
                    </div>
                    <button className="button h-min" onClick={handleClose}>Empty Favorites</button>
                    <button className="button h-min" onClick={handleClose}>x</button>
                </header>
                <section className="flex gap-8">
                    {favorites.artists.length > 0 ? 
                        (<div>
                            <h3 className="text-xl font-bold">Artists: </h3>
                            <ul className={listStyling}>
                                {favorites.artists.map((a) => {return (
                                    <li className="flex">
                                        <span className="flex-grow">{a.firstName} {a.lastName}</span>
                                        <button className="button" onClick={() => toggleFavorites("artists", a)}>Remove</button>
                                    </li>
                                )})}
                            </ul>
                         </div>) : ""}

                    {favorites.galleries.length > 0 ? 
                        (<div>
                            <h3 className="text-xl font-bold">Galleries: </h3>
                            <ul className={listStyling}>
                                {favorites.galleries.map((g) => {return (
                                    <li className="flex">
                                        <span className="flex-grow">{g.galleryName}</span>
                                        <button className="button" onClick={() => toggleFavorites("galleries", g)}>Remove</button>
                                    </li>
                                )})}
                            </ul>
                        </div>) : ""}
                    <PaintingList className="basis-64" paintings={favorites.paintings} />     
                </section>
            </div>
        </div>
    )
}
