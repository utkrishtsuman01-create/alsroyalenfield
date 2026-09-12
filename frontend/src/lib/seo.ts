import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { business, images } from "@/lib/site";

export const SITE_URL = (import.meta.env.VITE_PUBLIC_SITE_URL ?? "https://als-royal-enfield.preview.emergentagent.com").replace(/\/$/, "");

export interface PageSeo {
  title: string;
  description: string;
  label: string;
  indexable?: boolean;
}

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "ALS Royal Enfield Service | Motorcycle Service in Thakurpukur, Kolkata",
    description: "ALS Royal Enfield Service provides motorcycle servicing and repair services in Thakurpukur, Kolkata. Visit the workshop for motorcycle maintenance, repairs and service enquiries.",
    label: "Home",
  },
  "/services": {
    title: "Motorcycle Service & Repair | ALS Royal Enfield Service",
    description: "Explore maintenance, repair and bike-care service enquiries at ALS Royal Enfield Service in Thakurpukur, Kolkata.",
    label: "Services",
  },
  "/book-service": {
    title: "Book Motorcycle Service | ALS Royal Enfield Service",
    description: "Prepare a motorcycle service enquiry to review and send to ALS Royal Enfield Service in Thakurpukur, Kolkata through WhatsApp.",
    label: "Book Service",
  },
  "/workshop": {
    title: "Our Motorcycle Workshop | ALS Royal Enfield Service",
    description: "See the workshop environment and service approach at ALS Royal Enfield Service in Thakurpukur, Kolkata.",
    label: "Workshop",
  },
  "/about": {
    title: "About ALS Royal Enfield Service | Thakurpukur, Kolkata",
    description: "Learn about the grounded motorcycle care and service-focused approach at ALS Royal Enfield Service in Thakurpukur, Kolkata.",
    label: "About",
  },
  "/gallery": {
    title: "Motorcycle Service Gallery | ALS Royal Enfield Service",
    description: "View real workshop, motorcycle and service imagery from ALS Royal Enfield Service in Thakurpukur, Kolkata.",
    label: "Gallery",
  },
  "/visit-us": {
    title: "Visit ALS Royal Enfield Service | Thakurpukur, Kolkata",
    description: "Find ALS Royal Enfield Service at Post Office Joka, Thakurpukur, Kolkata. View opening hours, address and directions.",
    label: "Visit Us",
  },
  "/contact": {
    title: "Contact ALS Royal Enfield Service | Kolkata",
    description: "Call, get directions or prepare a WhatsApp service enquiry for ALS Royal Enfield Service in Thakurpukur, Kolkata.",
    label: "Contact",
  },
  "/404": {
    title: "Page Not Found | ALS Royal Enfield Service",
    description: "The page you are looking for may have moved or no longer exists.",
    label: "Page not found",
    indexable: false,
  },
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attribute, key);
    node.dataset.siteMeta = "true";
    document.head.appendChild(node);
  }
  node.content = content;
}

function setCanonical(url: string) {
  let node = document.head.querySelector<HTMLLinkElement>("link[rel=canonical]");
  if (!node) {
    node = document.createElement("link");
    node.rel = "canonical";
    node.dataset.siteMeta = "true";
    document.head.appendChild(node);
  }
  node.href = url;
}

function setSchema(pathname: string, seo: PageSeo, canonical: string) {
  document.head.querySelectorAll("script[data-site-schema]").forEach((node) => node.remove());
  const breadcrumbs = pathname === "/" ? undefined : [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: seo.label, item: canonical },
  ];
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      url: SITE_URL,
      telephone: "+91 90076 92978",
      image: [images.signboard, images.workshop],
      logo: `${SITE_URL}/als-mark.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Post Office Joka, 172, Mahatma Gandhi Rd, Srijoni, Thakurpukur",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700104",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:30", closes: "19:30" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:30", closes: "15:00" },
      ],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: business.name, publisher: { "@id": `${SITE_URL}/#business` } },
    { "@type": "WebPage", "@id": canonical, url: canonical, name: seo.title, description: seo.description, isPartOf: { "@id": `${SITE_URL}/#website` } },
  ];
  if (pathname === "/services") {
    graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: "Motorcycle servicing and repair", description: seo.description, provider: { "@id": `${SITE_URL}/#business` }, areaServed: "Thakurpukur, Kolkata" });
  }
  if (breadcrumbs) graph.push({ "@type": "BreadcrumbList", itemListElement: breadcrumbs });
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.siteSchema = "true";
  script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  document.head.appendChild(script);
}

export default function SiteMeta() {
  const { pathname } = useLocation();
  const routePath = pageSeo[pathname] ? pathname : "/404";
  const seo = pageSeo[routePath];

  useEffect(() => {
    const canonical = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.indexable === false ? "noindex, nofollow" : "index, follow");
    setMeta("name", "theme-color", "#0d0f12");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:image", `${SITE_URL}/als-social-card.svg`);
    setMeta("property", "og:image:alt", "ALS Royal Enfield Service — Keep your ride ready");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:type", routePath === "/" ? "website" : "article");
    setMeta("property", "og:url", canonical);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", `${SITE_URL}/als-social-card.svg`);
    setCanonical(canonical);
    setSchema(routePath, seo, canonical);
  }, [routePath, seo]);

  return null;
}
