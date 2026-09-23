import { Metadata } from 'next';
import Link from 'next/link';
import SlideUp from '@/components/animations/SlideUp';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'مقالات و آموزش‌ها | EXTIM Digital',
  description: 'آخرین مقالات آموزشی در زمینه طراحی وب‌سایت، سئو، هوش مصنوعی و اتوماسیون فرآیندهای تجاری.',
  keywords: ['وبلاگ', 'مقالات آموزشی', 'آموزش سئو', 'آموزش برنامه نویسی', 'توسعه وب'],
};

// Next.js Revalidation
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogIndexPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    select: {
      title: true,
      slug: true,
      excerpt: true,
      createdAt: true,
      readTime: true,
    }
  });

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <SlideUp>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(to right, var(--text-color), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            وبلاگ EXTIM Digital
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            جدیدترین مقالات آموزشی، اخبار تکنولوژی و راهنمای رشد کسب‌وکار در دنیای دیجیتال
          </p>
        </div>
      </SlideUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {posts.map((post: any, index: number) => (
          <SlideUp key={post.slug} delay={0.1 * (index + 1)}>
            <Link href={`/blog/${post.slug}`} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer', height: '100%' }}>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString('fa-IR') : ''}</span>
                  <span>{post.readTime} مطالعه</span>
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-color)', lineHeight: 1.5 }}>
                  {post.title}
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  مطالعه مقاله &larr;
                </div>
              </div>
            </Link>
          </SlideUp>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          هنوز مقاله‌ای در پنل مدیریت ثبت نشده است.
        </div>
      )}
    </div>
  );
}
