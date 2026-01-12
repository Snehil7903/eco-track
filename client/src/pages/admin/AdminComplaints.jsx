import { useComplaints } from "@/context/ComplaintContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function AdminComplaints() {
    const { complaints, updateStatus, loading } = useComplaints();

    if (loading) {
        return <p className="text-gray-500">Loading complaints...</p>;
    }


    if (complaints.length === 0) {
        return <p className="text-gray-500">No complaints found.</p>;
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">All Complaints</h1>

            {complaints.map((c) => (
                <Card key={c.id}>
                    <CardHeader>
                        <CardTitle>{c.location}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-sm text-gray-600">{c.description}</p>
                        <p>Status: <strong><span
                            className={`px-2 py-1 rounded text-sm font-semibold
                                    ${c.status === "Resolved"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                        >
                            {c.status}
                        </span>
                        </strong></p>

                        {c.status === "Pending" && (
                            <Button
                                size="sm"
                                onClick={() => updateStatus(c.id, "Resolved")}
                            >
                                Mark as Resolved
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
