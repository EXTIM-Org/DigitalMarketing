import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'توسعه نرم‌افزار و سامانه‌های اختصاصی | EXTIM',
  description: 'توسعه و برنامه‌نویسی نرم‌افزارهای تحت وب، پورتال‌های سازمانی و سیستم‌های یکپارچه با بالاترین استانداردهای امنیتی توسط تیم EXTIM.',
};

export default function SoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
