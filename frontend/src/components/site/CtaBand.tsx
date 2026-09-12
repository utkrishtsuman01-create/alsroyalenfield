import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

export default function CtaBand({ title = "Bring your bike in. Start with a clear conversation." }: { title?: string }) {
  return (
    <section className="cta-band" data-testid="cta-band">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12 lg:py-20">
        <div className="max-w-2xl"><p className="eyebrow" data-testid="cta-band-eyebrow">Ready when you are</p><h2 className="mt-4 font-display text-3xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl" data-testid="cta-band-heading">{title}</h2></div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/book-service" className={buttonVariants({ size: "lg", className: "cta-amber" })} data-testid="cta-band-book-link">Book a service <ArrowUpRight size={17} /></Link>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "cta-outline" })} data-testid="cta-band-directions-link"><MapPin size={16} /> Directions</a>
        </div>
      </div>
    </section>
  );
}
