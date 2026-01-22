import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@contexts/AuthContext";
import PropTypes from "prop-types";

/**
 * ProtectedRoute Component
 * Redirects to /login if there is no active session
 */
export default function ProtectedRoute({ children, redirectTo = "/login" }) {
  const { session, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f18]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
