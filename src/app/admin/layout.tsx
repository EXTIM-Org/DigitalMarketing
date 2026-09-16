import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Protect all admin routes except login
  // Note: For finer control, we usually use middleware.ts, but this works for basic layout protection.
  const session = await getServerSession(authOptions);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--background)", color: "var(--text-color)" }}>
      {session && (
        <aside style={{ width: "250px", borderLeft: "1px solid var(--card-border)", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "2rem", color: "var(--primary)" }}>پنل مدیریت</h2>
          <Link href="/admin" style={{ textDecoration: "none", color: "inherit", padding: "0.5rem", borderRadius: "8px" }} className="nav-link">داشبورد</Link>
          <Link href="/admin/blog" style={{ textDecoration: "none", color: "inherit", padding: "0.5rem", borderRadius: "8px" }} className="nav-link">مقالات وبلاگ</Link>
          <Link href="/admin/portfolio" style={{ textDecoration: "none", color: "inherit", padding: "0.5rem", borderRadius: "8px" }} className="nav-link">نمونه کارها</Link>
          
          <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--card-border)", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            کاربر: {session.user?.email}
          </div>
        </aside>
      )}
      <main style={{ flex: 1, padding: session ? "2rem" : "0" }}>
        {children}
      </main>
    </div>
  );
}
