import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business, navItems } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr]">
          <div>
            <p className="eyebrow" data-testid="footer-eyebrow">ALS / 01 — SERVICE WORKSHOP</p>
            <h2 className="mt-5 max-w-lg font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl" data-testid="footer-heading">Keep your ride ready.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55" data-testid="footer-description">Professional motorcycle servicing and repair in Thakurpukur, Kolkata. Bring in the bike, talk through the need, and start with a clear service conversation.</p>
            <Link to="/book" className="inline-flex items-center gap-2 pt-7 text-sm font-bold uppercase tracking-[0.14em] text-amber-300" data-testid="footer-book-service-link">Request service <ArrowUpRight size={16} /></Link>
          </div>
          <div>
            <p className="eyebrow" data-testid="footer-navigation-label">Explore</p>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="footer-link" data-testid={`footer-${item.label.toLowerCase().replaceAll(" ", "-")}-link`}>{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="eyebrow" data-testid="footer-contact-label">Find the workshop</p>
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="footer-contact-row mt-5" data-testid="footer-directions-link"><MapPin size={17} /><span>{business.address.slice(0, 3).join(" ")}<br />Kolkata — 700104</span></a>
            <a href={`tel:${business.phones[0]}`} className="footer-contact-row mt-4" data-testid="footer-phone-link"><Phone size={17} /><span>{business.formattedPhones.join(" / ")}</span></a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} ALS Royal Enfield Service</p>
          <p data-testid="footer-location-note">Thakurpukur · Kolkata · West Bengal</p>
        </div>
      </div>
    </footer>
  );
}
