import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";
import { useAuth } from "./useAuth";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  useEffect(() => {
    (async () => {
      console.log("[AuthCallback] Starting...");

      await refreshUser();
      
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("[AuthCallback] User:", user);

      if (!user) {
        console.log("[AuthCallback] No user found");
        navigate("/login", { replace: true });
        return;
      }

      // Get role from localStorage (set during login)
      let role = localStorage.getItem("loginRole");

      console.log("[AuthCallback] Role from localStorage:", role);
      console.log("[AuthCallback] Current user metadata role:", user.user_metadata?.role);

      if (!role) {
        // If no role in localStorage, fall back to metadata
        role = user?.user_metadata?.role;
      }

      if (!role) {
        console.log("[AuthCallback] No role found");
        navigate("/login", { replace: true });
        return;
      }

      // ALWAYS update user metadata to match the login role
      if (user.user_metadata?.role !== role) {
        console.log("[AuthCallback] Updating user metadata role to:", role);
        await supabase.auth.updateUser({ data: { role } });
        // Refresh to get the updated user
        await refreshUser();
      }

      // Clear localStorage after using it
      localStorage.removeItem("loginRole");

      console.log("[AuthCallback] Redirecting to portal for role:", role);

      // Redirect user to correct portal
      if (role === "student") navigate("/student-portal", { replace: true });
      else if (role === "business") navigate("/business-portal", { replace: true });
      else if (role === "admin") navigate("/admin-portal", { replace: true });
      else navigate("/", { replace: true });
    })();
  }, [navigate, refreshUser]);

  return (
    <div className="min-h-screen grid place-items-center">Signing you in…</div>
  );
}