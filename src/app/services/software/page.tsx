import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طراحی نرم‌افزار و سامانه‌های اختصاصی | Apex Digital',
  description: 'توسعه و برنامه‌نویسی نرم‌افزارهای تحت وب، پورتال‌های سازمانی و سیستم‌های مدیریت سفارشی با بالاترین استانداردهای امنیتی.',
  keywords: ['طراحی نرم افزار', 'توسعه وب', 'پورتال سازمانی', 'برنامه نویسی اختصاصی', 'سیستم مدیریت'],
};

export default function SoftwareDevPage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/#services" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>بازگشت به خدمات &larr;</Link>
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--accent), #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          طراحی نرم‌افزار (Software Dev)
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          پروژه‌های پیچیده نیازمند راهکارهای اختصاصی هستند. تیم مهندسی ما سامانه‌های تحت وب و نرم‌افزارهای یکپارچه‌ای را خلق می‌کند که فرآیندهای تجاری شما را متحول می‌سازد. از سیستم‌های مدیریت موجودی تا پورتال‌های عظیم سازمانی.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>ویژگی‌های خدمات ما:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-color)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>معماری میکروسرویس و مقیاس‌پذیر (Scalable)</li>
          <li>استفاده از دیتابیس‌های مدرن و امن</li>
          <li>توسعه سیستم‌های CRM و ERP اختصاصی</li>
          <li>تست‌های خودکار و تضمین کیفیت نرم‌افزار</li>
        </ul>

        <button className="btn-primary">مشاوره رایگان نرم‌افزار</button>
      </div>
    </div>
  );
}
