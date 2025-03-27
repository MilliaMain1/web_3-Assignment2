import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//I am very sad that this component has to exist
function AutoCenter({lat, lng}) {
    if (lat === undefined || lng === undefined) return; //Prevent an error when the map does not have a lat and long
    const map = useMap();
    useEffect(() => {
        map.panTo([lat, lng]);
    }, [lat, lng]);
    return null;
}

export default function LocationMap({ lat, lng }) {

    return (
        <MapContainer
          style={{height: "100%", width: '100%'}}
          center={[lat, lng]}
          zoom={13}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat, lng]}>
                <Popup>
                  Latitude: {lat}, Longitude: {lng}
                </Popup>
            </Marker>
            <AutoCenter lat={lat} lng={lng} />
        </MapContainer>
    );
};

