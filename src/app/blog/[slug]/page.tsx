import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js Revalidation
export const revalidate = 60; // Revalidate every 60 seconds

async function getPost(slug: string) {
  return await prisma.post.findUnique({
    where: { slug }
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'مقاله پیدا نشد | EXTIM Digital',
    };
  }

  return {
    title: `${post.title} | وبلاگ EXTIM Digital`,
    description: post.excerpt,
    alternates: {
      canonical: `https://extim.ir/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | وبلاگ EXTIM Digital`,
      description: post.excerpt || '',
      url: `https://extim.ir/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.mainImage ? [post.mainImage] : [],
            "datePublished": post.createdAt,
            "dateModified": post.updatedAt,
            "author": {
              "@type": "Organization",
              "name": "EXTIM Digital",
              "url": "https://extim.ir"
            },
            "publisher": {
              "@type": "Organization",
              "name": "EXTIM Digital",
              "logo": {
                "@type": "ImageObject",
                "url": "https://extim.ir/favicon.ico"
              }
            }
          })
        }}
      />
      <Link href="/blog" style={{ color: 'var(--primary)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 600 }}>
        &rarr; بازگشت به وبلاگ
      </Link>

      <article className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString('fa-IR') : ''}</span>
          <span>{post.readTime} مطالعه</span>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-color)', marginBottom: '2rem', lineHeight: 1.4 }}>
          {post.title}
        </h1>

        {post.mainImage && (
          <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: '1rem', overflow: 'hidden' }}>
            <Image 
              src={post.mainImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        <div className="blog-content" style={{ lineHeight: 1.8, color: 'var(--text-color)', fontSize: '1.1rem' }}>
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
      </article>

      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 2.5rem 0 1rem 0;
          color: var(--primary);
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul {
          list-style-type: disc;
          padding-right: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
      `}} />
    </div>
  );
}
