import { useComplaints } from "@/context/ComplaintContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyComplaints() {
  const { complaints, loading } = useComplaints();

  if (loading) {
    return <p className="text-gray-500">Loading complaints...</p>;
  }

  if (complaints.length === 0) {
    return <p className="text-gray-500">No complaints submitted yet.</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Complaints</h1>

      {complaints.map((c) => (
        <Card key={c.id}>
          <CardHeader>
            <CardTitle>{c.location}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{c.description}</p>
            <p className="mt-2 font-semibold">
              Status: {c.status}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
