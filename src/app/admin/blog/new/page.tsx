"use client";
import BlogForm from "@/components/admin/BlogForm";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function NewBlogPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8 max-w-5xl mx-auto"
    >
      <div className="flex flex-col gap-2">
        <Link 
          href="/admin/blog" 
          className="flex items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors w-fit"
        >
          <ArrowRight size={20} />
          <span className="text-sm font-medium">بازگشت به لیست مقالات</span>
        </Link>
        <div className="flex items-center gap-3 mt-4">
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <FileText className="text-blue-500" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">نوشتن مقاله جدید</h1>
            <p className="text-[var(--text-muted)] text-sm mt-1">محتوای ارزشمند خود را با مخاطبان به اشتراک بگذارید.</p>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="bg-[#0f0f13] backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl p-6 md:p-8"
      >
        <BlogForm />
      </motion.div>
    </motion.div>
  );
}
