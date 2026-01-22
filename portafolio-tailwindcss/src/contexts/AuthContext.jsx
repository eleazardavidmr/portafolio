import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChange,
  signOut as authSignOut,
} from "@services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Sign out the current user
   */
  const logout = async () => {
    const result = await authSignOut();
    if (result.success) {
      setSession(null);
    }
  };

  /**
   * Fetch admin profile (hardcoded admin ID)
   */

  useEffect(() => {
    // Subscribe to auth state changes
    const subscription = onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
