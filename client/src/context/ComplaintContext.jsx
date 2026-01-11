import { createContext, useContext, useEffect, useState } from "react";

const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Load complaints on app start
  useEffect(() => {
    const saved = localStorage.getItem("ecoComplaints");
    if (saved) {
      setComplaints(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  // Save complaints whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("ecoComplaints", JSON.stringify(complaints));
    }
  }, [complaints, loading]);

  const addComplaint = (complaint) => {
    setComplaints((prev) => [
      ...prev,
      {
        id: Date.now(),
        status: "Pending",
        createdAt: new Date().toISOString(),
        ...complaint,
      },
    ]);
  };

  const updateStatus = (id, status) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status } : c
      )
    );
  };

  return (
    <ComplaintContext.Provider
      value={{ complaints, addComplaint, updateStatus, loading }}
    >
      {children}
    </ComplaintContext.Provider>
  );
}

export const useComplaints = () => useContext(ComplaintContext);
