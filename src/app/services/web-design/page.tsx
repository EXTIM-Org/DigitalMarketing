import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'خدمات طراحی وبسایت شرکتی و فروشگاهی | EXTIM Digital',
  description: 'طراحی سایت مدرن، واکنش‌گرا و سریع با تمرکز بر تجربه کاربری و سئو. ما وب‌سایت‌هایی می‌سازیم که مشتریان شما را تحت تاثیر قرار دهد.',
  keywords: ['طراحی سایت', 'طراحی وبسایت', 'سایت شرکتی', 'سایت فروشگاهی', 'طراحی سایت با Next.js'],
  alternates: {
    canonical: 'https://extim.ir/services/web-design',
  },
  openGraph: {
    title: 'خدمات طراحی وبسایت شرکتی و فروشگاهی | EXTIM Digital',
    description: 'طراحی سایت مدرن، واکنش‌گرا و سریع با تمرکز بر تجربه کاربری و سئو. ما وب‌سایت‌هایی می‌سازیم که مشتریان شما را تحت تاثیر قرار دهد.',
    url: 'https://extim.ir/services/web-design',
    type: 'website',
  },
};

export default function WebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "طراحی وب‌سایت",
        "provider": {
          "@type": "Organization",
          "name": "EXTIM Digital",
          "url": "https://extim.ir"
        },
        "description": "طراحی سایت مدرن، واکنش‌گرا و سریع با تمرکز بر تجربه کاربری و سئو. ما وب‌سایت‌هایی می‌سازیم که مشتریان شما را تحت تاثیر قرار دهد."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "خانه",
            "item": "https://extim.ir"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "خدمات",
            "item": "https://extim.ir/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "طراحی وب‌سایت",
            "item": "https://extim.ir/services/web-design"
          }
        ]
      }
    ]
  };

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/#services" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>بازگشت به خدمات &larr;</Link>
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          طراحی وب‌سایت (Web Design)
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          وب‌سایت شما ویترین کسب‌وکار شماست. ما با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا مانند Next.js و React، وب‌سایت‌هایی طراحی می‌کنیم که نه تنها از نظر بصری خیره‌کننده هستند، بلکه از نظر سرعت و سئو نیز بی‌رقیب‌اند.
        </p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>ویژگی‌های خدمات ما:</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-color)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>طراحی واکنش‌گرا (Responsive) برای موبایل و تبلت</li>
          <li>سرعت بارگذاری فوق‌العاده با معماری SSR</li>
          <li>طراحی رابط کاربری (UI) مدرن و شیشه‌ای (Glassmorphism)</li>
          <li>کدنویسی کاملا اختصاصی و منعطف</li>
        </ul>

        <button className="btn-primary">شروع پروژه طراحی سایت</button>
      </div>
    </div>
  );
}
