import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'اتوماسیون فرآیندها | EXTIM',
  description: 'کاهش زمان انجام کارها و افزایش بهره‌وری با پیاده‌سازی اتوماسیون فرآیندهای تجاری و ربات‌های هوشمند توسط تیم تخصصی EXTIM.',
};

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
