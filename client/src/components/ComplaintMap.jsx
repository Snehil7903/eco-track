import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useComplaints } from "@/context/ComplaintContext";

export default function ComplaintMap() {
  const { complaints } = useComplaints();

  return (
    <div className="w-full h-[500px] rounded overflow-hidden border">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {complaints
          .filter((c) => c.coords)
          .map((c) => (
            <Marker
              key={c.id}
              position={[c.coords.lat, c.coords.lng]}
            >
              <Popup>
                <p className="font-semibold">{c.location}</p>
                <p>Status: {c.status}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
