export const metadata = {
  title: 'داشبورد مدیریت | EXTIM',
};

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "var(--text-color)" }}>خلاصه وضعیت سایت</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        <div className="glass-panel" style={{ padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "1rem" }}>کل مقالات</h3>
          <div style={{ fontSize: "3rem", fontWeight: "bold", color: "var(--primary)" }}>--</div>
        </div>
        <div className="glass-panel" style={{ padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "1rem" }}>کل نمونه‌کارها</h3>
          <div style={{ fontSize: "3rem", fontWeight: "bold", color: "var(--primary)" }}>--</div>
        </div>
      </div>
      
      <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(59, 130, 246, 0.1)", borderRadius: "16px", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>به پنل مدیریت اختصاصی خوش آمدید!</h2>
        <p style={{ lineHeight: 1.8 }}>
          این پنل مدیریت اختصاصی شماست که مستقیماً به دیتابیس PostgreSQL متصل است.
          از منوی سمت راست می‌توانید بخش‌های مختلف سایت را مدیریت کنید.
        </p>
      </div>
    </div>
  );
}
