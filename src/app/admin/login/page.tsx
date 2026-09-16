"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("ایمیل یا رمز عبور اشتباه است.");
    } else {
      router.push("/admin");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--background)" }}>
      <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: "3rem", width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "var(--text-color)" }}>ورود به پنل مدیریت</h1>
        
        {error && <div style={{ color: "red", fontSize: "0.9rem", textAlign: "center" }}>{error}</div>}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>ایمیل مدیر</label>
          <input 
            type="email" 
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@apex.ir"
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid var(--card-border)", background: "transparent", color: "var(--text-color)" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>رمز عبور</label>
          <input 
            type="password" 
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid var(--card-border)", background: "transparent", color: "var(--text-color)" }}
          />
        </div>

        <button type="submit" className="btn-primary" style={{ padding: "1rem", marginTop: "1rem", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
          ورود
        </button>
      </form>
    </div>
  );
}
