import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" />;

  if (user.publicMetadata.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
