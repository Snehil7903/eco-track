import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Mobile Top Bar */}
        <div className="md:hidden p-4 border-b bg-white">
          <Button variant="outline" onClick={() => setOpen(true)}>
            ☰ Menu
          </Button>
        </div>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
