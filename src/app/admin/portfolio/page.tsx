import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

export default async function PortfolioAdminPage() {
  const items = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--primary)]">مدیریت نمونه‌کارها</h1>
        <Link 
          href="/admin/portfolio/new" 
          className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          <PlusCircle size={18} />
          <span>نمونه‌کار جدید</span>
        </Link>
      </div>

      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-[var(--background)] border-b border-[var(--card-border)]">
            <tr>
              <th className="p-4 text-[var(--text-muted)] font-medium">تصویر</th>
              <th className="p-4 text-[var(--text-muted)] font-medium">عنوان پروژه</th>
              <th className="p-4 text-[var(--text-muted)] font-medium">دسته‌بندی</th>
              <th className="p-4 text-[var(--text-muted)] font-medium text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-[var(--text-muted)]">
                  هیچ نمونه‌کاری یافت نشد.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id} className="border-b border-[var(--card-border)] hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="p-4">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    ) : (
                      <div className="w-16 h-16 bg-gray-800 rounded-md flex items-center justify-center text-xs text-gray-500">بدون عکس</div>
                    )}
                  </td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4 text-[var(--text-muted)]">{item.category}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <Link href={`/admin/portfolio/edit/${item.id}`} className="text-blue-500 hover:text-blue-400">
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
