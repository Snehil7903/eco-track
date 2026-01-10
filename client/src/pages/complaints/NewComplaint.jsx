import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewComplaint() {
  const [image, setImage] = useState(null);

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Report Waste Issue</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input placeholder="Location (Area / Landmark)" />

        <textarea
          className="w-full border rounded p-2"
          placeholder="Describe the issue..."
          rows={4}
        />

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="h-40 object-cover rounded"
          />
        )}

        <Button className="w-full">Submit Complaint</Button>
      </CardContent>
    </Card>
  );
}
