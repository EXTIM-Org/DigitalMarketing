import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

export default async function BlogAdminPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--primary)]">مدیریت مقالات</h1>
        <Link 
          href="/admin/blog/new" 
          className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          <PlusCircle size={18} />
          <span>مقاله جدید</span>
        </Link>
      </div>

      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-[var(--background)] border-b border-[var(--card-border)]">
            <tr>
              <th className="p-4 text-[var(--text-muted)] font-medium">عنوان مقاله</th>
              <th className="p-4 text-[var(--text-muted)] font-medium">لینک (Slug)</th>
              <th className="p-4 text-[var(--text-muted)] font-medium">وضعیت</th>
              <th className="p-4 text-[var(--text-muted)] font-medium text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-[var(--text-muted)]">
                  هیچ مقاله‌ای یافت نشد.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="border-b border-[var(--card-border)] hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="p-4">{post.title}</td>
                  <td className="p-4 text-[var(--text-muted)]">{post.slug}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${post.published ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                      {post.published ? 'منتشر شده' : 'پیش‌نویس'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <Link href={`/admin/blog/edit/${post.id}`} className="text-blue-500 hover:text-blue-400">
                        <Edit size={18} />
                      </Link>
                      <button className="text-red-500 hover:text-red-400">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
