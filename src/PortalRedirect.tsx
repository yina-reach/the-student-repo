// src/components/PersistedPortalRedirect.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export default function PortalRedirect() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (loading || !user) return;

    const role =
      (user.user_metadata as any)?.role ?? localStorage.getItem("loginRole");

    if (!role) return;

    if (
      pathname === "/" ||
      pathname === "/login" ||
      pathname === "/auth/callback"
    ) {
      const target =
        role === "student"
          ? "/student-portal"
          : role === "business"
          ? "/business-portal"
          : role === "admin"
          ? "/admin-portal"
          : null;

      if (target) {
        navigate(target, { replace: true });
      }
    }
  }, [user, loading]);

  return null;
}
