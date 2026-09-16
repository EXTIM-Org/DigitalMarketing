import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{ marginTop: 'auto', borderRadius: '0', borderBottom: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: 'inherit', display: 'inline-block', marginBottom: '1rem' }}>
              اپکس دیجیتال
            </Link>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              ما به کسب‌وکارها کمک می‌کنیم تا با استفاده از طراحی مدرن، سئو و اتوماسیون هوشمند، در دنیای دیجیتال بدرخشند.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-color)' }}>دسترسی سریع</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">درباره ما</Link>
              </li>
              <li>
                <Link href="/portfolio" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">نمونه کارها</Link>
              </li>
              <li>
                <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">وبلاگ و مقالات</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-color)' }}>خدمات ما</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <Link href="/services/web-design" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">طراحی وب‌سایت</Link>
              </li>
              <li>
                <Link href="/services/software" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">توسعه نرم‌افزار</Link>
              </li>
              <li>
                <Link href="/services/seo" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">سئو و بهینه‌سازی</Link>
              </li>
              <li>
                <Link href="/services/automation" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">اتوماسیون فرآیندها</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-color)' }}>ارتباط با ما</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>📍 تهران، ایران</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>✉️ info@apexdigital.ir</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--card-border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().toLocaleDateString('fa-IR', { year: 'numeric' })} اپکس دیجیتال. تمامی حقوق محفوظ است.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" aria-label="لینکدین" style={{ color: 'var(--text-muted)' }} className="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="اینستاگرام" style={{ color: 'var(--text-muted)' }} className="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="توییتر" style={{ color: 'var(--text-muted)' }} className="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-link:hover {
          color: var(--primary) !important;
        }
      `}} />
    </footer>
  );
}
