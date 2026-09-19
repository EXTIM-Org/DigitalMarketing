# Site Structure and Architecture

This document defines the intended URL and logical structure for the Apex Digital (EXTIM-Org) web service.
AI Agents working on this project MUST strictly adhere to this structure when creating new pages, configuring routing, or generating links.

## URL Structure

```text
domain.com/
│
├── services/                                 (مرکز اصلی تمام خدمات)
│   │
│   ├── web-design/                           (طراحی وب‌سایت)
│   │   ├── corporate/                        (طراحی سایت شرکتی)
│   │   └── ecommerce/                        (طراحی فروشگاه اینترنتی)
│   │
│   ├── software-development/                 (طراحی و توسعه نرم‌افزار)
│   │   ├── custom-software/                  (توسعه نرم‌افزارهای اختصاصی و سازمانی)
│   │   ├── web-applications/                 (طراحی وب‌اپلیکیشن - PWA / SaaS)
│   │   ├── mobile-apps/                      (توسعه اپلیکیشن موبایل: اندروید و iOS)
│   │   └── api-integration/                  (طراحی API و یکپارچه‌سازی سیستم‌ها)
│   │
│   ├── seo/                                  (بهینه‌سازی و سئو)
│   │   ├── technical-seo/                    (سئو تکنیکال و زیرساخت)
│   │   ├── content-seo/                      (استراتژی و سئو محتوا)
│   │   └── local-seo/                        (سئو محلی)
│   │
│   ├── smart-bots/                           (ربات‌های هوشمند و اتوماسیون)
│   │   ├── telegram-bot/                     (طراحی ربات تلگرام)
│   │   ├── instagram-automation/             (اتوماسیون هوشمند اینستاگرام و دایرکت)
│   │   └── business-process-automation/      (اتوماسیون فرآیندهای کسب‌و‌کار / RPA)
│   │
│   └── ai-assistants/                        (دستیارها و ایجنت‌های هوش مصنوعی)
│       ├── custom-gpt/                       (شخصی‌سازی مدل‌های زبانی روی دیتای اختصاصی)
│       ├── customer-support-agent/           (ایجنت هوشمند پشتیبانی و فروش)
│       └── ai-consulting/                    (مشاوره و استقرار راه‌حل‌های AI)
│
├── portfolio/                                (نمونه‌کارها و پروژه‌ها)
│   ├── software/                             (کیس‌استادی‌های توسعه نرم‌افزار)
│   ├── websites/                             (پروژه‌های طراحی وب)
│   └── ai-and-automation/                    (پروژه‌های اتوماسیون و رباتیک نرم‌افزاری)
│
└── blog/                                     (مرکز آموزش و مقالات تخصصی)
    ├── software-engineering/                 (معماری نرم‌افزار، مقایسه فریم‌ورک‌ها)
    ├── web-development/                      (توسعه وب)
    ├── seo-and-growth/                       (سئو و هک رشد)
    └── artificial-intelligence/              (هوش مصنوعی)
```

## Agent Directives
1. When creating new Next.js routes, map them exactly to the paths shown above within the `src/app` directory.
2. Ensure internal links (e.g., in Navigation, Footer, or call-to-action buttons) point to these specific paths.
3. Keep the categorization consistent for both `portfolio` and `blog` entries.
