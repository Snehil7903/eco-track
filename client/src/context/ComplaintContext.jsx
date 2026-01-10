import { createContext, useContext, useState } from "react";

const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (complaint) => {
    setComplaints((prev) => [
      ...prev,
      { id: Date.now(), status: "Pending", ...complaint },
    ]);
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint }}>
      {children}
    </ComplaintContext.Provider>
  );
}

export const useComplaints = () => useContext(ComplaintContext);
