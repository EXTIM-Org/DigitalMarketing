import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ربات‌های اتوماسیون و هوش مصنوعی | Apex Digital',
  description: 'کاهش هزینه‌ها و افزایش سرعت با ربات‌های اتوماسیون فرآیندها. توسعه ربات‌های تلگرام، خزنده‌های وب و ابزارهای هوش مصنوعی.',
  keywords: ['ربات اتوماسیون', 'ربات تلگرام', 'هوش مصنوعی', 'اتوماسیون فرآیند', 'وب اسکرپینگ'],
};

export default function AutomationPage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/#services" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>بازگشت به خدمات &larr;</Link>
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, #0ea5e9, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ربات‌های اتوماسیون (Automation Bots)
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          کارهای تکراری را به ربات‌ها بسپارید! ما با توسعه اسکریپت‌های اتوماسیون و بات‌های هوشمند، بهره‌وری سازمان شما را به شکل چشمگیری افزایش می‌دهیم. از یکپارچه‌سازی APIها تا ربات‌های پشتیبانی هوشمند.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>ویژگی‌های خدمات ما:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-color)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>ساخت ربات‌های تلگرام و پلتفرم‌های اجتماعی</li>
          <li>جمع‌آوری خودکار داده‌ها (Web Scraping)</li>
          <li>یکپارچه‌سازی سیستم‌های مختلف (API Integration)</li>
          <li>اتوماسیون با کمک هوش مصنوعی (AI Workflows)</li>
        </ul>

        <button className="btn-primary">درخواست ساخت ربات</button>
      </div>
    </div>
  );
}
