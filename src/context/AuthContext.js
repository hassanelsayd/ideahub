"use client";
import { createContext, useContext } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const data = useSession();
  return (
    <AuthContext.Provider value={{ authData: data }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
