import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const savedUser = localStorage.getItem("ecoUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false); 
  }, []);

  const login = (email, role = "citizen") => {
    const userData = { email, role };
    setUser(userData);
    localStorage.setItem("ecoUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ecoUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
