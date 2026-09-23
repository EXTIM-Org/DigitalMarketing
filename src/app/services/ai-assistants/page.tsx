import Link from 'next/link';

export const metadata = {
  title: 'دستیارهای هوش مصنوعی | EXTIM',
  description: 'خدمات تخصصی دستیارهای هوش مصنوعی توسط تیم EXTIM.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="glass-panel p-10 md:p-16 max-w-3xl rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in-up">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
          در حال توسعه
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
          دستیارهای هوش مصنوعی
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          این صفحه در حال طراحی و توسعه است. به زودی اطلاعات کامل و تخصصی مربوط به این بخش در اینجا قرار خواهد گرفت. از صبوری شما سپاسگزاریم.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
        >
          بازگشت به صفحه اصلی
          <svg className="w-5 h-5 ml-2 rotate-180 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
