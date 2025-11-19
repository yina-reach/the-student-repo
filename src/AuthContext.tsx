import { createContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";

export type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithEmail: (email: string, role?: string) => Promise<{ error: any }>;
  signInWithProvider: (
    provider: "google" | "github"
  ) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    setLoading(true);
    const { data } = await supabase.auth.getSession();
    setSession(data.session ?? null);
    setUser(data.session?.user ?? null);
    setLoading(false);
  };

  const navigate = useNavigate();


  // Load current session once on mount
  useEffect(() => {
    // Set up the listener FIRST
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, sess) => {
      console.log("Auth state changed - event:", _event, "session:", sess);
      setSession(sess);
      setUser(sess?.user ?? null);
      setLoading(false);
    });

    // Then get the initial session (remove all navigation logic)
    supabase.auth.getSession().then(({ data }) => {
      console.log("Initial session loaded:", data.session);
      setSession(data.session ?? null);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Send magic link; attach role & send user back to /auth/callback
  const signInWithEmail = async (email: string, role?: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: { role },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Supabase signInWithOtp error:", error);
    }
    return { error };
  };

  // OAuth → also return to /auth/callback for unified handling
  const signInWithProvider = async (provider: "google" | "github") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` }, // 🔧 changed
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signInWithEmail,
        signInWithProvider,
        signOut,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
