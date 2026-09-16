"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import ContactModalButton from "./ContactModalButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/portfolio", label: "نمونه کارها" },
    { href: "/blog", label: "وبلاگ" },
    { href: "/about", label: "درباره ما" },
  ];

  return (
    <>
      <nav className="glass-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand */}
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.025em', zIndex: 101 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsOpen(false)}>
            اپکس دیجیتال
          </Link>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" style={{ fontWeight: 500, opacity: 0.8, textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
              {link.label}
            </Link>
          ))}
          <ContactModalButton />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button (Hidden on Desktop) */}
        <div className="mobile-toggle" style={{ display: 'none', zIndex: 101, alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', padding: '0.5rem' }}
            aria-label="منوی موبایل"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(var(--bg-color-rgb), 0.8)', // fallback to solid if vars aren't perfectly RGB, but we can just use var(--card-bg)
              background: 'var(--card-bg)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      fontSize: '2rem', 
                      fontWeight: 700, 
                      textDecoration: 'none', 
                      color: 'var(--text-color)',
                      letterSpacing: '-0.02em',
                      position: 'relative',
                      display: 'inline-block'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
                style={{ marginTop: '1rem' }}
                onClick={() => setIsOpen(false)}
              >
                <ContactModalButton />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
