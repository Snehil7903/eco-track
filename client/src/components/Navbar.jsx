export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-green-600">EcoTrack</h1>
      <div className="space-x-4">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}
