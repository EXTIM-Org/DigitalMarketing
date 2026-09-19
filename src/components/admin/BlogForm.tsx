"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
// ReactQuill must be dynamically imported to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function BlogForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    mainImage: "",
    readTime: "",
    published: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.url) {
        setFormData((prev) => ({ ...prev, mainImage: result.url }));
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("آپلود عکس با خطا مواجه شد.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/blog");
        router.refresh();
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert(`خطا در ذخیره مقاله: ${errorData.error || res.statusText}`);
      }
    } catch (error: any) {
      console.error(error);
      alert(`خطا در ارتباط با سرور: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-[var(--text-muted)] text-sm mb-2">عنوان مقاله</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="مثلاً: آموزش Next.js نسخه ۱۵"
            className="form-input"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[var(--text-muted)] text-sm mb-2">لینک (Slug - انگلیسی)</label>
          <input
            type="text"
            name="slug"
            required
            value={formData.slug}
            onChange={handleChange}
            placeholder="e.g. nextjs-15-tutorial"
            className="form-input text-left"
            dir="ltr"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">خلاصه مقاله (توضیحات کوتاه)</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows={3}
          placeholder="چکیده‌ای جذاب برای نمایش در لیست مقالات بنویسید..."
          className="form-input resize-y min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-[var(--text-muted)] text-sm mb-2">عکس اصلی مقاله</label>
          <div className="file-input-wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input-overlay"
            />
            <div className="form-input border-dashed flex flex-col items-center justify-center text-[var(--text-muted)] text-center py-6">
              <span className="text-sm">برای آپلود عکس کلیک کنید یا فایل را بکشید</span>
            </div>
          </div>
          {formData.mainImage && (
            <div className="relative mt-4 rounded-xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] p-2">
              <img src={formData.mainImage} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-[var(--text-muted)] text-sm mb-2">زمان مطالعه</label>
          <input
            type="text"
            name="readTime"
            value={formData.readTime}
            onChange={handleChange}
            placeholder="مثلاً: ۵ دقیقه"
            className="form-input"
          />
        </div>
      </div>

      <div className="space-y-2 pb-12">
        <label className="block text-[var(--text-muted)] text-sm mb-2">محتوای اصلی مقاله</label>
        <div className="form-input p-0 overflow-hidden">
          <ReactQuill 
            theme="snow" 
            value={formData.content} 
            onChange={handleContentChange} 
            className="h-[350px] pb-10 border-none"
          />
        </div>
      </div>

        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="published"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className="form-checkbox"
          />
          <label htmlFor="published" style={{ margin: "0 12px" }} className="text-[var(--text-color)] cursor-pointer select-none font-medium">
            این مقاله منتشر شود (پابلیک)
          </label>
        </div>

      <div className="pt-8 flex gap-4 border-t border-[var(--card-border)]">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "در حال ذخیره..." : "ذخیره مقاله"}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/blog')}
          className="btn-secondary"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
