import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-green-600 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">EcoTrack</h2>

      <nav className="space-y-3">
        <Link to="/dashboard">Dashboard</Link>

        {user?.role === "citizen" && (
          <Link to="/complaints">My Complaints</Link>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/admin/complaints">Manage Complaints</Link>
            <Link to="/admin/analytics">Analytics</Link>
          </>
        )}
      </nav>
    </aside>
  );
}
