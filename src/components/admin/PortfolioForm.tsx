"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortfolioForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData((prev) => ({ ...prev, image: result.url }));
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
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/portfolio");
        router.refresh();
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert(`خطا در ذخیره نمونه‌کار: ${errorData.error || res.statusText}`);
      }
    } catch (error: any) {
      console.error(error);
      alert(`خطا در ارتباط با سرور: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">عنوان پروژه</label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="مثلاً: طراحی سایت فروشگاهی"
          className="form-input"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">دسته‌بندی (مثلاً: طراحی سایت، اپلیکیشن موبایل)</label>
        <input
          type="text"
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          placeholder="مثلاً: اپلیکیشن موبایل"
          className="form-input"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">توضیحات کوتاه پروژه</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="توضیحات جذابی درباره پروژه و دستاوردهای آن..."
          className="form-input resize-y min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">لینک پروژه (اختیاری)</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          dir="ltr"
          placeholder="https://..."
          className="form-input text-left"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-[var(--text-muted)] text-sm mb-2">عکس پروژه</label>
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
        {formData.image && (
          <div className="relative mt-4 rounded-xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] p-2">
            <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
          </div>
        )}
      </div>

      <div className="pt-8 flex gap-4 border-t border-[var(--card-border)]">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "در حال ذخیره..." : "ذخیره نمونه‌کار"}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/portfolio')}
          className="btn-secondary"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
