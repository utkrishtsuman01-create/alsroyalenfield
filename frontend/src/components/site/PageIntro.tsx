import type { ReactNode } from "react";
import Breadcrumbs from "@/components/site/Breadcrumbs";

interface PageIntroProps {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  current?: string;
}

export default function PageIntro({ number, eyebrow, title, description, image, current }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10" data-testid="page-intro-section">
      {image && <img src={image} alt="" aria-hidden="true" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-25" data-testid="page-intro-background-image" />}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0d0f12_0%,rgba(13,15,18,.9)_48%,rgba(13,15,18,.45)_100%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="max-w-3xl">
          {current && <Breadcrumbs current={current} />}
          <div className="flex items-center gap-4" data-testid="page-intro-label"><span className="number-tag">{number}</span><span className="eyebrow">{eyebrow}</span></div>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl" data-testid="page-intro-heading">{title}</h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg" data-testid="page-intro-description">{description}</p>
        </div>
      </div>
    </section>
  );
}
