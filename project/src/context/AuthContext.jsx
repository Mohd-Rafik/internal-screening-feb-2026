import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = (email, password) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const match = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (match) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(match)
      );
      setUser(match);
      return { success: true };
    } else {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
       return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
  };
 
/* ---------------- Custom Hook ---------------- */
export const useAuth = () =>
  useContext(AuthContext);
