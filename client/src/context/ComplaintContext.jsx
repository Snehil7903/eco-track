import { createContext, useContext, useEffect, useState } from "react";

const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  const [complaints, setComplaints] = useState([]);

  // Load complaints on app start
  useEffect(() => {
    const saved = localStorage.getItem("ecoComplaints");
    if (saved) {
      setComplaints(JSON.parse(saved));
    }
  }, []);

  // Save complaints on change
  useEffect(() => {
    localStorage.setItem("ecoComplaints", JSON.stringify(complaints));
  }, [complaints]);

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
      value={{ complaints, addComplaint, updateStatus }}
    >
      {children}
    </ComplaintContext.Provider>
  );
}

export const useComplaints = () => useContext(ComplaintContext);
