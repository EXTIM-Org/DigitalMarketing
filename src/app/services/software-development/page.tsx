'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Server, ShieldCheck, Layers, Smartphone, LayoutDashboard, ChevronLeft, ArrowLeft } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SoftwareServicePage() {
  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Orbs for aesthetic */}
      <div style={{ position: 'absolute', top: '5%', right: '10%', width: '350px', height: '350px', background: 'rgba(244, 63, 94, 0.15)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '450px', height: '450px', background: 'rgba(139, 92, 246, 0.15)', filter: 'blur(120px)', borderRadius: '50%', zIndex: -1 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/#services" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }} className="hover-text-primary">
          <ChevronLeft size={20} style={{ marginLeft: '0.5rem' }} />
          بازگشت به خدمات
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '50px', color: '#f43f5e', fontWeight: 600, marginBottom: '1.5rem' }}>
            توسعه نرم‌افزار و مهندسی سیستم
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            خلق راه‌حل‌های نرم‌افزاری <span style={{ background: 'linear-gradient(to right, #f43f5e, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>مقیاس‌پذیر</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            ایده‌های بزرگ نیازمند زیرساخت‌های قدرتمند هستند. ما با استفاده از مدرن‌ترین تکنولوژی‌های توسعه، سامانه‌های تحت وب و نرم‌افزارهای اختصاصی شما را با بالاترین استانداردهای امنیتی طراحی می‌کنیم.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
            <button className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #f43f5e, #8b5cf6)' }}>
              <Code2 size={20} />
              شروع پروژه نرم‌افزاری
            </button>
            <button className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              مشاهده نمونه کارها
            </button>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ marginBottom: '6rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Layers size={32} color="#f43f5e" />, title: 'معماری میکروسرویس', desc: 'استفاده از معماری‌های توزیع شده برای توسعه سیستم‌های پیچیده که به راحتی قابل مقیاس‌پذیری هستند.' },
              { icon: <ShieldCheck size={32} color="#10b981" />, title: 'امنیت پیشرفته', desc: 'پیاده‌سازی بالاترین استانداردهای امنیتی برای محافظت از داده‌های حساس سازمانی شما.' },
              { icon: <Server size={32} color="#3b82f6" />, title: 'زیرساخت ابری', desc: 'توسعه نرم‌افزارهای Cloud-Native با قابلیت پایداری بالا (High Availability) و بدون قطعی.' },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s ease', cursor: 'default' }} whileHover={{ y: -10 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(244, 63, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Showcase */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="glass-panel"
          style={{ padding: '4rem 3rem', background: 'var(--card-bg)', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>خدمات توسعه نرم‌افزار EXTIM Digital</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>پوشش تمامی نیازهای نرم‌افزاری کسب‌وکار شما</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              { title: 'نرم‌افزارهای تحت وب (SaaS)', icon: <LayoutDashboard />, desc: 'طراحی نرم‌افزارهای مبتنی بر مرورگر با کاربری روان، بدون نیاز به نصب و قابل دسترس در همه‌جا.', link: '/services/software/web-applications' },
              { title: 'توسعه اپلیکیشن موبایل', icon: <Smartphone />, desc: 'ساخت اپلیکیشن‌های بومی (Native) و هیبریدی برای سیستم‌عامل‌های iOS و Android.', link: '/services/software/mobile-apps' },
              { title: 'سیستم‌های اختصاصی CRM/ERP', icon: <Layers />, desc: 'توسعه پورتال‌های مدیریت منابع سازمانی و ارتباط با مشتری کاملاً منطبق بر فرآیندهای شرکت شما.', link: '/services/software/custom-software' },
              { title: 'یکپارچه‌سازی و توسعه API', icon: <Code2 />, desc: 'ایجاد سرویس‌های واسط قدرتمند (REST/GraphQL) جهت ارتباط و انتقال داده بین سیستم‌های مختلف.', link: '/services/software/api-integration' }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '20px', background: 'rgba(0,0,0,0.02)', border: '1px solid var(--card-border)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#f43f5e', background: 'rgba(244, 63, 94, 0.1)', padding: '0.8rem', borderRadius: '12px' }}>
                    {service.icon}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{service.title}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem', flex: 1 }}>{service.desc}</p>
                <Link href={service.link} style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', gap: '0.5rem' }} className="hover-text-primary">
                  اطلاعات بیشتر <ArrowLeft size={16} />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ textAlign: 'center', marginTop: '6rem', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)', borderRadius: '24px', border: '1px solid rgba(244, 63, 94, 0.1)' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>نیاز به یک سیستم نرم‌افزاری اختصاصی دارید؟</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            ایده خود را با ما در میان بگذارید تا کارشناسان EXTIM Digital بهترین مسیر توسعه و تکنولوژی را به شما پیشنهاد دهند.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 3rem', fontSize: '1.1rem', background: 'linear-gradient(135deg, #f43f5e, #8b5cf6)' }}>
            مشاوره فنی و برآورد هزینه
          </Link>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hover-text-primary:hover {
          color: #f43f5e !important;
        }
      `}} />
    </div>
  );
}
