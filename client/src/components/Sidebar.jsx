import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Sidebar({ open, setOpen }) {
  const { user } = useAuth();

  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-50 md:static
          top-0 left-0 h-full
          w-64 bg-green-600 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="p-4 flex justify-between items-center md:block">
          <h2 className="text-xl font-bold">EcoTrack</h2>

          {/* Close button (mobile) */}
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setOpen(false)}
          >
            ✕
          </Button>
        </div>

        <nav className="p-4 space-y-3">
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>

          {user?.role === "citizen" && (
            <Link to="/complaints" onClick={() => setOpen(false)}>
              My Complaints
            </Link>
          )}

          {user?.role === "admin" && (
            <>
              <Link to="/admin/complaints">Manage Complaints</Link>
              <Link to="/admin/analytics">Analytics</Link>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
