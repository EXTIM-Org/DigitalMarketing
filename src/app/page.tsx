import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";

export default function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      
      {/* Hero Section */}
      <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 0' }}>
        <SlideUp yOffset={30}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '2rem', border: '1px solid rgba(56, 189, 248, 0.2)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
            به اپکس دیجیتال خوش آمدید
          </div>
        </SlideUp>
        
        <SlideUp delay={0.1} yOffset={40}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, var(--text-color), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            خلق آینده دیجیتال<br />با هنر و هوش مصنوعی
          </h1>
        </SlideUp>

        <SlideUp delay={0.2} yOffset={40}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            ما یک آژانس خلاق هستیم که با استفاده از جدیدترین تکنولوژی‌های توسعه وب، سئو و اتوماسیون، کسب‌وکار شما را به سطح بالاتری می‌بریم.
          </p>
        </SlideUp>

        <SlideUp delay={0.3} yOffset={20}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services/web-design" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none' }}>شروع پروژه</Link>
            <Link href="/portfolio" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textDecoration: 'none' }}>نمونه کارها</Link>
          </div>
        </SlideUp>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" style={{ 
        padding: '6rem 0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <SlideUp yOffset={40}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>خدمات ما</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>راهکارهای نوآورانه برای دنیای دیجیتال</p>
          </div>
        </SlideUp>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Card 1 */}
          <SlideUp delay={0.1}>
            <Link href="/services/web-design" className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'transform 0.3s ease', cursor: 'pointer', textDecoration: 'none', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>طراحی وب‌سایت</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                خلق وب‌سایت‌های خیره‌کننده، واکنش‌گرا و کاربرمحور که مخاطبان شما را مجذوب و درگیر می‌کند.
              </p>
            </Link>
          </SlideUp>

          {/* Card 2 */}
          <SlideUp delay={0.2}>
            <Link href="/services/software" className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'transform 0.3s ease', cursor: 'pointer', textDecoration: 'none', height: '100%' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>توسعه نرم‌افزار</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                ساخت نرم‌افزارهای سفارشی، اپلیکیشن‌ها و پلتفرم‌های دیجیتال قدرتمند متناسب با نیازهای منحصربه‌فرد تجارت شما.
              </p>
            </Link>
          </SlideUp>

          {/* Card 3 */}
          <SlideUp delay={0.3}>
            <Link href="/services/automation" className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'transform 0.3s ease', cursor: 'pointer', textDecoration: 'none', height: '100%' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>ربات‌های اتوماسیون</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                ساده‌سازی عملیات، افزایش بهره‌وری و خودکارسازی وظایف با ربات‌های سفارشی و جریان‌های کاری هوش مصنوعی.
              </p>
            </Link>
          </SlideUp>

          {/* Card 4 */}
          <SlideUp delay={0.4}>
            <Link href="/services/seo" className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', transition: 'transform 0.3s ease', cursor: 'pointer', textDecoration: 'none', height: '100%' }}>
              <div style={{ color: '#10b981', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><polyline points="11 8 11 11 14 14"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>سئو و بهینه‌سازی</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                بهینه‌سازی حضور آنلاین شما، هدایت ترافیک ارگانیک و ارتقای رتبه‌بندی موتورهای جستجو برای دسترسی بهتر به مخاطبان.
              </p>
            </Link>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
