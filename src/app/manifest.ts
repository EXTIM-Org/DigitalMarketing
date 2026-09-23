import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EXTIM Digital | طراحی سایت و نرم‌افزار',
    short_name: 'EXTIM Digital',
    description: 'خدمات مدرن طراحی وب‌سایت، توسعه نرم‌افزار، ربات‌های اتوماسیون و سئو.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#38bdf8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
