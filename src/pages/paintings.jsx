import { useEffect, useState } from "react";
import api from "../lib/api";
import PaintingList from "../components/PaintingList";

export default function PaintingsPage() {
    const [paintings, setPaintings] = useState();
    const [yearMin, setYearMin] = useState(0);
    const [yearMax, setYearMax] = useState(3000);
    const [titleFilter, setTitleFilter] = useState("");
    const [artistFilter, setArtistFilter] = useState("");
    const [galleryFilter, setGalleryFilter] = useState("");
    let filteredPaintings = null; 
    if (paintings != null) {
        filteredPaintings = paintings.filter(
            (p) => { 
                const artist = p.artist.firstName + " " + p.artist.LastName
                return p.yearOfWork >= yearMin &&
                p.yearOfWork<= yearMax &&
                p.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
                artist.toLowerCase().includes(artistFilter.toLowerCase()) &&
                p.gallery.galleryName.toLowerCase().includes(galleryFilter.toLowerCase())
            }
        );
    }
    useEffect(() => {
        api.paintings.getAll()
            .then((res) => {
                setPaintings(res);
            })
    }, [])
        
    return (
        <div className="flex w-full">
            <form className="p-2 rounded border">
                <div className="mb-4">
                <label className="block mb-1">Title:</label>
                <input
                    type="text"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                    className="p-2 border rounded w-full"
                    placeholder="Filter by title"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1">Artist:</label>
                <input
                    type="text"
                    value={artistFilter}
                    onChange={(e) => setArtistFilter(e.target.value)}
                    className="p-2 border rounded w-full"
                    placeholder="Filter by artist"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1">Gallery:</label>
                <input
                    type="text"
                    value={galleryFilter}
                    onChange={(e) => setGalleryFilter(e.target.value)}
                    className="p-2 border rounded w-full"
                    placeholder="Filter by gallery"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1">Year Range:</label>
                <div className="flex gap-2">
                  <input
                      type="number"
                      value={yearMin}
                      onChange={(e) => setYearMin(Number(e.target.value))}
                      className="p-2 border rounded w-1/2"
                      placeholder="Min Year"
                  />
                  <input
                      type="number"
                      value={yearMax}
                      onChange={(e) => setYearMax(Number(e.target.value))}
                      className="p-2 border rounded w-1/2"
                      placeholder="Max Year"
                  />
                </div>
              </div>  
            </form>
            {filteredPaintings ? (<PaintingList paintings={filteredPaintings} />) : (
                <div className="w-full h-full mx-auto">
                    No Paintings were found matching the given parameters 
                </div>
            )} 
        </div>
    )
}
