import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(null);
  const contextData = {};
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading ... </p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
