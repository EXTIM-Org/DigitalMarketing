import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import SlideUp from '@/components/animations/SlideUp';
import { ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';

export const revalidate = 60;

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = await prisma.portfolio.findUnique({
    where: { id: params.id }
  });

  if (!item) {
    return {
      title: 'پروژه یافت نشد',
    };
  }

  return {
    title: `${item.title} | نمونه کار EXTIM Digital`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const item = await prisma.portfolio.findUnique({
    where: { id: params.id }
  });

  if (!item) {
    notFound();
  }

  // Format date
  const dateStr = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(item.createdAt));

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh' }}>
      <SlideUp yOffset={20}>
        <Link 
          href="/portfolio" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-muted)', 
            marginBottom: '2rem',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.2s ease'
          }}
          className="hover:text-primary"
        >
          <ArrowRight size={18} />
          بازگشت به گالری پروژه‌ها
        </Link>
      </SlideUp>

      <SlideUp delay={0.1}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: 'var(--primary)', 
            padding: '0.4rem 1rem', 
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Tag size={14} />
            {item.category}
          </span>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            color: 'var(--text-muted)',
            fontSize: '0.85rem'
          }}>
            <Calendar size={14} />
            تاریخ ثبت: {dateStr}
          </span>
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
          fontWeight: 800, 
          color: 'var(--text-color)', 
          marginBottom: '2rem',
          lineHeight: 1.2
        }}>
          {item.title}
        </h1>
      </SlideUp>

      {item.image && (
        <SlideUp delay={0.2}>
          <div className="glass-panel" style={{ 
            width: '100%', 
            height: 'clamp(300px, 60vw, 550px)', 
            position: 'relative', 
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </SlideUp>
      )}

      <SlideUp delay={0.3}>
        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-color)' }}>
            درباره این پروژه
          </h2>
          
          <div style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.8, 
            color: 'var(--text-muted)', 
            marginBottom: '2.5rem',
            whiteSpace: 'pre-wrap'
          }}>
            {item.description}
          </div>

          {item.link && (
            <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--card-border)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', fontSize: '1.1rem' }}
              >
                مشاهده آنلاین پروژه
                <ExternalLink size={20} />
              </a>
            </div>
          )}
        </div>
      </SlideUp>
    </main>
  );
}
