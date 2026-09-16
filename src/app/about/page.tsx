import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'درباره ما | اپکس دیجیتال',
  description: 'آشنایی با تیم اپکس دیجیتال، ماموریت و داستان شکل‌گیری آژانس توسعه دیجیتال.',
  keywords: ['درباره ما', 'تیم اپکس دیجیتال', 'شرکت طراحی سایت', 'آژانس دیجیتال'],
};

export default function AboutPage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--text-color), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          درباره اپکس دیجیتال
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          ما در **اپکس دیجیتال** تیمی از مهندسان نرم‌افزار، طراحان خلاق و متخصصان مارکتینگ هستیم که با یک هدف مشترک گرد هم آمده‌ایم: **تسریع رشد دیجیتال کسب‌وکارها**.
          ما باور داریم که تکنولوژی زمانی ارزشمند است که بتواند چالشی را حل کند و ارزش افزوده‌ای برای کاربران نهایی خلق نماید.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>+۵ سال</h3>
            <p style={{ color: 'var(--text-muted)' }}>تجربه تخصصی</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>+۱۲۰</h3>
            <p style={{ color: 'var(--text-muted)' }}>پروژه موفق</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>۱۰۰٪</h3>
            <p style={{ color: 'var(--text-muted)' }}>رضایت مشتریان</p>
          </div>
        </div>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>ماموریت ما</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          ماموریت ما ارائه راهکارهای پایدار، امن و فوق‌سریع در حوزه وب و نرم‌افزار است تا شما بتوانید به جای درگیری با مسائل فنی، تنها بر روی توسعه کسب‌وکار خود تمرکز کنید. از یک وب‌سایت شرکتی ساده تا سیستم‌های پیچیده اتوماسیون، ما در تمام مسیر همراه شما هستیم.
        </p>

        <Link href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
