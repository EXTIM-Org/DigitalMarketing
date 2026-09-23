import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import SlideUp from "@/components/animations/SlideUp";

export default function Home() {
  return (
    <div className="container-padding" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EXTIM Digital",
            "url": "https://extim.ir",
            "logo": "https://extim.ir/favicon.ico",
            "description": "ما یک آژانس خلاق هستیم که با استفاده از جدیدترین تکنولوژی‌های توسعه وب، سئو و اتوماسیون، کسب‌وکار شما را به سطح بالاتری می‌بریم."
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="hero-padding" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <SlideUp yOffset={30}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '2rem', border: '1px solid rgba(56, 189, 248, 0.2)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
            به EXTIM Digital خوش آمدید
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
      <section id="services" className="hero-padding" style={{ 
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Card 1: Web Design */}
          <SlideUp delay={0.1}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>
                <Link href="/services/web-design" style={{textDecoration: 'none', color: 'inherit'}}>طراحی وب‌سایت</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                خلق وب‌سایت‌های خیره‌کننده، واکنش‌گرا و کاربرمحور که مخاطبان شما را مجذوب می‌کند.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Link href="/services/web-design/corporate" className="service-chip">سایت شرکتی</Link>
                <Link href="/services/web-design/ecommerce" className="service-chip">فروشگاه اینترنتی</Link>
              </div>
            </div>
          </SlideUp>

          {/* Card 2: Software Development */}
          <SlideUp delay={0.2}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>
                <Link href="/services/software-development" style={{textDecoration: 'none', color: 'inherit'}}>توسعه نرم‌افزار</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                ساخت پلتفرم‌های دیجیتال قدرتمند متناسب با نیازهای منحصربه‌فرد تجارت شما.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Link href="/services/software-development/custom-software" className="service-chip">نرم‌افزار اختصاصی</Link>
                <Link href="/services/software-development/web-applications" className="service-chip">وب اپلیکیشن (PWA/SaaS)</Link>
                <Link href="/services/software-development/mobile-apps" className="service-chip">اپلیکیشن موبایل</Link>
                <Link href="/services/software-development/api-integration" className="service-chip">طراحی API</Link>
              </div>
            </div>
          </SlideUp>

          {/* Card 3: SEO */}
          <SlideUp delay={0.3}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ color: '#10b981', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><polyline points="11 8 11 11 14 14"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>
                <Link href="/services/seo" style={{textDecoration: 'none', color: 'inherit'}}>سئو و بهینه‌سازی</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                بهینه‌سازی حضور آنلاین شما و ارتقای رتبه‌بندی موتورهای جستجو.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Link href="/services/seo/technical-seo" className="service-chip">سئو تکنیکال</Link>
                <Link href="/services/seo/content-seo" className="service-chip">سئو محتوا</Link>
                <Link href="/services/seo/local-seo" className="service-chip">سئو محلی</Link>
              </div>
            </div>
          </SlideUp>

          {/* Card 4: Smart Bots */}
          <SlideUp delay={0.4}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>
                <Link href="/services/smart-bots" style={{textDecoration: 'none', color: 'inherit'}}>ربات‌های هوشمند</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                ساده‌سازی عملیات، افزایش بهره‌وری و خودکارسازی وظایف تجاری شما.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Link href="/services/smart-bots/telegram-bot" className="service-chip">ربات تلگرام</Link>
                <Link href="/services/smart-bots/instagram-automation" className="service-chip">اتوماسیون اینستاگرام</Link>
                <Link href="/services/smart-bots/business-process-automation" className="service-chip">اتوماسیون فرآیندها (RPA)</Link>
              </div>
            </div>
          </SlideUp>

          {/* Card 5: AI Assistants */}
          <SlideUp delay={0.5}>
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ color: '#f59e0b', marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path><path d="M16 12h.01"></path><path d="M8 12h.01"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-color)' }}>
                <Link href="/services/ai-assistants" style={{textDecoration: 'none', color: 'inherit'}}>دستیارهای هوش مصنوعی</Link>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                توسعه و استقرار راهکارهای هوش مصنوعی بر روی دیتای اختصاصی کسب‌وکار شما.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <Link href="/services/ai-assistants/custom-gpt" className="service-chip">مدل اختصاصی (Custom GPT)</Link>
                <Link href="/services/ai-assistants/customer-support-agent" className="service-chip">پشتیبان هوشمند</Link>
                <Link href="/services/ai-assistants/ai-consulting" className="service-chip">مشاوره AI</Link>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}
