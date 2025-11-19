// StudentRedirectGate.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useAuth } from "../useAuth";

export default function StudentRedirectGate() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Don't do anything while loading
    if (loading) return;
    
    // If not logged in, redirect to login
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    // Check if user is actually a student
    const userRole = user.user_metadata?.role;
    if (userRole !== "student") {
      // Not a student, redirect to appropriate portal
      if (userRole === "business") {
        navigate("/business-portal", { replace: true });
      } else if (userRole === "admin") {
        navigate("/admin-portal", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
      return;
    }

    // Now we know we have a logged-in student
    const run = async () => {
      // If we stored an id from LoginPage, use it
      const storedId = localStorage.getItem("studentSubmissionId");
      if (storedId) {
        navigate(`/student/${storedId}`, { replace: true });
        return;
      }

      // Fallback: look up by email
      const email = user.email?.toLowerCase();
      if (!email) {
        navigate("/form", { replace: true });
        return;
      }

      const { data, error } = await supabase
        .from("submissions")
        .select("id")
        .eq("email", email)
        .maybeSingle();

      if (error) {
        console.error(error);
        navigate("/form", { replace: true });
        return;
      }

      if (data) {
        navigate(`/student/${data.id}`, { replace: true });
      } else {
        // No profile found → send to form page
        navigate("/form", { replace: true });
      }
    };

    run();
  }, [user, loading, navigate]);

  // Show loading state while checking auth
  if (loading) {
    return <div className="min-h-screen grid place-items-center">Loading...</div>;
  }

  return null;
}