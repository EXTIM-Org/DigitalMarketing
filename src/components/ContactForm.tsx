"use client";

import React, { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose(); // Close modal after success
      }, 3000);
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <div className="glass-panel" style={{ 
        padding: '2.5rem', 
        width: '100%', 
        maxWidth: '500px',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s, background 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'var(--text-color)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>شروع یک همکاری جدید</h3>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
          اطلاعات خود را وارد کنید تا در اسرع وقت با شما تماس بگیریم.
        </p>

        {status === 'success' ? (
          <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', color: '#10b981', border: '1px solid #10b981' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>پیام شما با موفقیت ارسال شد!</h4>
            <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>به زودی با شما تماس خواهیم گرفت.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>نام و نام خانوادگی</label>
              <input type="text" id="name" required className="form-input" placeholder="مثال: علی حسینی" />
            </div>
            
            <div>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>شماره تماس</label>
              <input type="tel" id="phone" required className="form-input" placeholder="09123456789" dir="ltr" style={{ textAlign: 'right' }} />
            </div>

            <div>
              <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>نوع خدمات</label>
              <select id="service" className="form-input" required defaultValue="">
                <option value="" disabled>انتخاب کنید...</option>
                <option value="web-design">طراحی وب‌سایت (شرکتی / فروشگاهی)</option>
                <option value="software-development">توسعه نرم‌افزار و وب‌اپلیکیشن</option>
                <option value="smart-bots">ربات‌های هوشمند و اتوماسیون</option>
                <option value="seo">سئو و بهینه‌سازی محتوا</option>
                <option value="ai-assistants">دستیارهای هوش مصنوعی</option>
                <option value="other">سایر موارد / مشاوره عمومی</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 500 }}>توضیحات تکمیلی</label>
              <textarea id="message" rows={3} className="form-input" placeholder="در مورد پروژه خود کمی توضیح دهید..."></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }} disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span style={{ display: 'inline-block', width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderRadius: '50%', borderTopColor: '#fff', animation: 'spin 1s ease-in-out infinite' }} />
              ) : (
                'ارسال درخواست مشاوره'
              )}
            </button>
          </form>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
}
