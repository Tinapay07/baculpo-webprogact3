import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated, hasRole } from "../services/AuthService";

const RequireAuth = ({ children, allowedRoles = [] }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0 && !hasRole(allowedRoles)) {
    // Not allowed to view this page — redirect to dashboard home
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RequireAuth;
