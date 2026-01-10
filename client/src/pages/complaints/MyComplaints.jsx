import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyComplaints = [
  {
    id: 1,
    location: "Near Park Road",
    status: "Pending",
  },
  {
    id: 2,
    location: "Main Market",
    status: "Resolved",
  },
];

export default function MyComplaints() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Complaints</h1>

      {dummyComplaints.map((c) => (
        <Card key={c.id}>
          <CardHeader>
            <CardTitle>{c.location}</CardTitle>
          </CardHeader>
          <CardContent>
            Status:{" "}
            <span className="font-semibold">{c.status}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
