# ALS Royal Enfield Service — living spec

## Purpose
Premium, dark editorial marketing website for a local motorcycle servicing and repair workshop in Thakurpukur, Kolkata. The core conversion is phone/enquiry/directions/visit — not ecommerce.

## Routes and flows
- `/` homepage: hero, hours/location strip, service preview, trust messaging, workshop story, motorcycle showcase, CTAs.
- `/services`: maintenance, repair and bike-care service categories with enquire links.
- `/workshop`, `/about`, `/gallery`, `/visit-us`, `/contact`: workshop discovery and trust pages.
- `/book-service`: validated, consent-gated enquiry form that opens a user-reviewed WhatsApp draft addressed to confirmed mobile 9007692978. No data is stored or sent by the website, and no appointment is presented as confirmed.
- `/book` and `/visit` are compatibility redirects to `/book-service` and `/visit-us`; they are not included in the sitemap.
- Gallery supports category filters and a lightbox dialog.
- Phone links use 9007692978 and 9748615101. Directions use the supplied Google Maps directions URL.

## Business facts
- Name: ALS Royal Enfield Service
- Address: Post Office Joka, 172, Mahatma Gandhi Rd, Srijoni, Thakurpukur, Kolkata, Chak Thakurani, West Bengal 700104, India
- Hours: Monday–Saturday 10:30 AM–7:30 PM; Sunday 10:30 AM–3:00 PM
- No authorised/dealer/certification/award/price/warranty claims are made.

## Data and auth
No app data persistence, authentication, customer accounts, payments or ecommerce. Backend remains the template connectivity API only; enquiry details are only encoded into a WhatsApp draft after explicit consent and are never stored or logged by the site.

## Production hardening
- Every public page has route-aware title, description, canonical, Open Graph/Twitter metadata, one H1 and JSON-LD WebPage data; inner pages include visible breadcrumbs and BreadcrumbList data.
- AutomotiveBusiness, WebSite and Service structured data contain only confirmed business facts.
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/als-mark.svg` and a branded custom 404 are public.
- Production source maps are disabled. Static-host and API security headers cover CSP/frame restrictions, MIME sniffing, referrer policy, permissions policy and HSTS where deployed over HTTPS.
- Runtime dependency audit is clean; the `shadcn` generator/styles package is build-only.
- `/als-social-card.svg` is a dedicated 1200×630 share artwork using the real motorcycle side-profile workshop photograph.
