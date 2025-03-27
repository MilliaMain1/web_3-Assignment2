import PaintingListing from "./paintingListing";
import PaintingModal from "./PaintingModal"
import { act, useState } from "react";
const compareString = (a, b) => {
    if (a > b) return 1;
    else if (a < b) return 1;
    else return 0;
}
const comparators = {
    year: (a, b) => a.yearOfWork - b.yearOfWork,
    artist: (a, b) => {
        const aName = a.artist.lastName + a.artist.FirstName
        const bName = b.artist.lastName + b.artist.FirstName
        return compareString(aName, bName) 
    },
    painting: (a, b) => compareString(a.title, b.title),
    gallery: (a, b) => compareString(a.gallery.galleryName, b.gallery.galleryName)
}
export default function PaintingList({paintings}){
    const [modalPainting, setModalPainting] = useState(null); 
    const [sort, setSort] = useState("year");
    const [isDecending, setIsDecending] = useState(false);

    const handleOpen = (newPainting) => {
        console.log(newPainting)
        setModalPainting(newPainting)
    } 

    const handleClose = () => {
        setModalPainting(null)
    }
    if (paintings.length === 0) return ;
    let sortedPaintings = [...paintings].sort(comparators[sort]);
    if (isDecending) sortedPaintings.reverse();
    return (
        <div className="w-full h-full">
            <PaintingModal paintingInfo={modalPainting} handleClose={handleClose}/>
            <div className="border max-h-full flex flex-col">
                <div className="flex gap-2 p-2">
                     <select  value={sort} onChange={(e) => setSort(e.target.value)}>
                         <option value={"year"}>Year</option> 
                         <option value={"artist"}>Artist Name</option> 
                         <option value={"painting"}>Title</option> 
                         <option value={"gallery"}>Gallery</option> 
                     </select>
                    <button className="button" onClick={() => setIsDecending(!isDecending)}>{isDecending ? "Decending" : "Ascending"}</button>
                </div>
                <ul className="max-h-full overflow-y-scroll">
                    {sortedPaintings.map((p, idx) => (<PaintingListing handleOpen={handleOpen} painting={p} key={idx} />))}
                </ul>
            </div>
        </div>
    )
}
