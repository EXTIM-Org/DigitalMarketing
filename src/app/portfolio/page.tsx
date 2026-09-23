import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'نمونه کارها | EXTIM Digital',
  description: 'گالری منتخب پروژه‌های موفق EXTIM Digital در زمینه طراحی سایت، توسعه نرم‌افزار و اپلیکیشن موبایل.',
};

// Next.js Revalidation
export const revalidate = 60;

export default async function PortfolioPage() {
  const portfolioItems = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SlideUp>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, var(--text-color), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            نمونه کارهای منتخب
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            ما با ترکیب هنر، تکنولوژی و استراتژی، ایده‌های شما را به محصولات دیجیتال قدرتمندی تبدیل می‌کنیم که کاربران عاشق آن‌ها می‌شوند.
          </p>
        </div>
      </SlideUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {portfolioItems.map((item: any, index: number) => (
          <SlideUp key={item.id} delay={0.1 * (index + 1)}>
            <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Image Container */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--card-bg)' }} />
                )}
              </div>
              
              {/* Content Container */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {item.category}
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '1rem' }}>
                  {item.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                  {item.description}
                </p>
                
                <Link href={`/portfolio/${item.id}`} className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0.8rem', gap: '0.5rem', textDecoration: 'none' }}>
                  مشاهده جزئیات پروژه
                </Link>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>

      {portfolioItems.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          هنوز پروژه‌ای در پنل مدیریت ثبت نشده است.
        </div>
      )}
    </div>
  );
}
