import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useComplaints } from "@/context/ComplaintContext";
import { useNavigate } from "react-router-dom";

export default function NewComplaint() {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null); // ✅ MOVED HERE

  const { addComplaint } = useComplaints();
  const navigate = useNavigate();

  const handleSubmit = () => {
    addComplaint({
      location,
      description,
      image,
      coords,
    });
    navigate("/complaints");
  };

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Report Waste Issue</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Describe the issue"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            className="h-40 rounded object-cover"
          />
        )}

        <Button
          variant="outline"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                setCoords({
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude,
                });
              },
              () => alert("Location permission denied")
            );
          }}
        >
          Use My Location
        </Button>

        <Button className="w-full" onClick={handleSubmit}>
          Submit Complaint
        </Button>
      </CardContent>
    </Card>
  );
}
