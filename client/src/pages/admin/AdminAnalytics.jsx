import { useComplaints } from "@/context/ComplaintContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAnalytics() {
  const { complaints } = useComplaints();

  const total = complaints.length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;
  const pending = total - resolved;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card>
        <CardHeader><CardTitle>Total Complaints</CardTitle></CardHeader>
        <CardContent className="text-2xl font-bold">{total}</CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Pending</CardTitle></CardHeader>
        <CardContent className="text-2xl font-bold text-yellow-600">
          {pending}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Resolved</CardTitle></CardHeader>
        <CardContent className="text-2xl font-bold text-green-600">
          {resolved}
        </CardContent>
      </Card>
    </div>
  );
}
