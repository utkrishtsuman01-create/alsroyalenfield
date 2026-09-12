import { ArrowUpRight, Home as HomeIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="not-found-page" data-testid="not-found-page">
      <div className="not-found-mark" aria-hidden="true">404</div>
      <p className="eyebrow" data-testid="not-found-eyebrow">Wrong turn</p>
      <h1 data-testid="not-found-heading">Looks like this road has no route.</h1>
      <p data-testid="not-found-description">The page you’re looking for may have moved or no longer exists.</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className={buttonVariants({ size: "lg", className: "cta-amber" })} data-testid="not-found-home-link"><HomeIcon size={16} /> Back to home</Link>
        <Link to="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "cta-outline" })} data-testid="not-found-services-link">View services <ArrowUpRight size={16} /></Link>
        <Link to="/visit-us" className={buttonVariants({ variant: "outline", size: "lg", className: "cta-outline" })} data-testid="not-found-visit-link"><MapPin size={16} /> Visit us</Link>
      </div>
    </section>
  );
}
