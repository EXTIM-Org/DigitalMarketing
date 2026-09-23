'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Clock, TrendingUp, Settings, Database, Activity, Bot, ChevronLeft } from 'lucide-react';

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

export default function AutomationServicePage() {
  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Orbs for aesthetic */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.2)', filter: 'blur(120px)', borderRadius: '50%', zIndex: -1 }} />

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
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '50px', color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem' }}>
            اتوماسیون فرآیندهای تجاری (BPA)
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            زمان را با <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>اتوماسیون هوشمند</span> بخرید
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
            کارهای تکراری و زمان‌بر را به ربات‌ها و اسکریپت‌های هوشمند ما بسپارید. با اتوماسیون فرآیندها، هزینه‌ها را کاهش دهید، خطای انسانی را به صفر برسانید و بهره‌وری تیم خود را چندین برابر کنید.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
            <button className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={20} />
              شروع خودکارسازی
            </button>
            <button className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
              مشاوره رایگان
            </button>
          </div>
        </motion.div>

        {/* Why Automation Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ marginBottom: '6rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>چرا به اتوماسیون نیاز دارید؟</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>مزایای پیاده‌سازی سیستم‌های خودکار در کسب‌وکار شما</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Clock size={32} color="#3b82f6" />, title: 'صرفه‌جویی در زمان', desc: 'کاهش زمان انجام کارهای روتین از ساعت‌ها به چند ثانیه.' },
              { icon: <TrendingUp size={32} color="#10b981" />, title: 'افزایش بهره‌وری', desc: 'تمرکز نیروهای انسانی بر روی کارهای خلاقانه و استراتژیک.' },
              { icon: <Activity size={32} color="#f59e0b" />, title: 'حذف خطای انسانی', desc: 'اجرای دقیق و بدون اشتباه فرآیندها به صورت ۲۴ ساعته.' },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.3s ease', cursor: 'default' }} whileHover={{ y: -10 }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services / Solutions Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="glass-panel"
          style={{ padding: '4rem 3rem', background: 'linear-gradient(135deg, rgba(17,24,39,0.7) 0%, rgba(3,7,18,0.8) 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', zIndex: 0 }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>خدمات اتوماسیون EXTIM</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'یکپارچه‌سازی سیستم‌ها (API)', icon: <Settings />, desc: 'اتصال نرم‌افزارها و سرویس‌های مختلف سازمان به یکدیگر برای انتقال خودکار داده‌ها.' },
                { title: 'ربات‌های جمع‌آوری داده', icon: <Database />, desc: 'استخراج هوشمند اطلاعات از وب‌سایت‌ها و پلتفرم‌ها (Web Scraping).' },
                { title: 'بات‌های تلگرام و سازمانی', icon: <Bot />, desc: 'توسعه ربات‌های تعاملی برای ارائه خدمات به مشتریان یا مدیریت فرآیندهای درون تیمی.' },
                { title: 'اتوماسیون مالی و گزارش‌گیری', icon: <TrendingUp />, desc: 'تولید خودکار گزارش‌های تحلیلی و مدیریتی به صورت دوره‌ای و ارسال به مدیران.' }
              ].map((service, idx) => (
                <div key={idx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: '#a78bfa', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.8rem' }}>{service.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ textAlign: 'center', marginTop: '6rem', padding: '4rem 2rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '24px', border: '1px solid rgba(59, 130, 246, 0.1)' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>آماده تحول در فرآیندهای سازمان خود هستید؟</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            همین حالا با کارشناسان EXTIM تماس بگیرید تا راهکارهای اختصاصی اتوماسیون برای کسب‌وکار شما را بررسی کنیم.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 3rem', fontSize: '1.1rem' }}>
            درخواست مشاوره تخصصی
          </Link>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hover-text-primary:hover {
          color: var(--primary) !important;
        }
      `}} />
    </div>
  );
}
