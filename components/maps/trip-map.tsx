"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

type TripMapProps = {
    latitude: number;
    longitude: number;
    destination: string;
};

const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function TripMap({
    latitude,
    longitude,
    destination,
}: TripMapProps) {
    return (
        <div className="overflow-hidden rounded-3xl border shadow-sm">
            <MapContainer
                center={[latitude, longitude]}
                zoom={12}
                scrollWheelZoom={true}
                className="h-[450px] w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={[latitude, longitude]}
                    icon={markerIcon}
                >
                    <Popup>
                        <div className="font-semibold">
                            {destination}
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}