import { useContext, useState, createContext, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const contextData = {
    user,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div className="w-[100vw] h-[100vh] grid items-center justify-center bg-gray-50 overflow-hidden anmate-load">
          <div className="text-center app-text-color justify-items-center grid gap-4 mx-auto">
            <h2 className="text-3xl">Joblier</h2>
            <BarLoader loading={loading} />
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
