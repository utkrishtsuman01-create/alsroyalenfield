import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navItems, business } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header" data-testid="site-header">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="brand-lockup" data-testid="header-brand-link" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">ALS</span>
          <span className="brand-type">
            <strong>ROYAL ENFIELD</strong>
            <small>SERVICE / THAKURPUR</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation" data-testid="desktop-navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-testid={`header-nav-${item.label.toLowerCase().replaceAll(" ", "-")}-link`}
              className={cn("nav-link", location.pathname === item.to && "nav-link-active")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${business.phones[0]}`} className="quick-call" data-testid="header-call-now-link">
            <Phone size={14} /> <span>Call now</span>
          </a>
          <Link to="/book-service" className={buttonVariants({ size: "sm", className: "header-book-button" })} data-testid="header-book-service-link">
            Book a service <ArrowUpRight size={15} />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-button xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation-panel"
          data-testid="mobile-menu-toggle-button"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation-panel" className="mobile-navigation xl:hidden" data-testid="mobile-navigation-panel">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.label.toLowerCase().replaceAll(" ", "-")}-link`}
                className="mobile-nav-link"
              >
                <span>{item.label}</span><ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5">
            <Link to="/book-service" onClick={() => setOpen(false)} className={buttonVariants({ size: "lg", className: "w-full justify-between" })} data-testid="mobile-book-service-link">
              Book a service <ArrowUpRight size={17} />
            </Link>
            <a href={`tel:${business.phones[0]}`} className="quick-call justify-center py-3" data-testid="mobile-call-now-link">
              <Phone size={15} /> Call +91 90076 92978
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
