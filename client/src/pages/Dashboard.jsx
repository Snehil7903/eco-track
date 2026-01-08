import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome {user?.role === "admin" ? "Admin" : "Citizen"} 👋
      </h1>

      <p className="mt-2 text-gray-600">
        Role: <strong>{user?.role}</strong>
      </p>
    </div>
  );
}
