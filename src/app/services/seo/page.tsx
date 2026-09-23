import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'خدمات سئو سایت و بهینه‌سازی موتور جستجو | EXTIM',
  description: 'ارتقا رتبه سایت در صفحه اول گوگل. خدمات جامع سئو تکنیکال، سئو داخلی و لینک‌سازی با ضمانت بهبود ترافیک ارگانیک.',
  keywords: ['سئو', 'خدمات سئو', 'بهینه سازی سایت', 'سئو تکنیکال', 'رتبه اول گوگل'],
};

export default function SeoPage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/#services" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>بازگشت به خدمات &larr;</Link>
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, #10b981, #84cc16)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          سئو و بهینه‌سازی (SEO)
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          بهترین وب‌سایت‌ها هم بدون دیده شدن ارزشی ندارند. متخصصین سئوی ما با استراتژی‌های مدرن و کلاه‌سفید، جایگاه شما را در نتایج موتورهای جستجو تثبیت می‌کنند تا ترافیک هدفمند و فروش شما افزایش یابد.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>ویژگی‌های خدمات ما:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-color)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>تحلیل کلمات کلیدی (Keyword Research) دقیق</li>
          <li>بهینه‌سازی کامل سئو تکنیکال (Core Web Vitals)</li>
          <li>تدوین استراتژی محتوا و بازاریابی محتوایی</li>
          <li>گزارش‌دهی شفاف و دوره‌ای از رشد ترافیک</li>
        </ul>

        <button className="btn-primary">درخواست آنالیز رایگان سئو</button>
      </div>
    </div>
  );
}
