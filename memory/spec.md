# ALS Royal Enfield Service — living spec

## Purpose
Premium, dark editorial marketing website for a local motorcycle servicing and repair workshop in Thakurpukur, Kolkata. The core conversion is phone/enquiry/directions/visit — not ecommerce.

## Routes and flows
- `/` homepage: hero, hours/location strip, service preview, trust messaging, workshop story, motorcycle showcase, CTAs.
- `/services`: maintenance, repair and bike-care service categories with enquire links.
- `/workshop`, `/about`, `/gallery`, `/visit`, `/contact`: workshop discovery and trust pages.
- `/book`: local-only demo service enquiry form; submission shows a confirmation state and explicitly does not contact or confirm an appointment.
- Gallery supports category filters and a lightbox dialog.
- Phone links use 9007692978 and 9748615101. Directions use the supplied Google Maps directions URL.

## Business facts
- Name: ALS Royal Enfield Service
- Address: Post Office Joka, 172, Mahatma Gandhi Rd, Srijoni, Thakurpukur, Kolkata, Chak Thakurani, West Bengal 700104, India
- Hours: Monday–Saturday 10:30 AM–7:30 PM; Sunday 10:30 AM–3:00 PM
- No authorised/dealer/certification/award/price/warranty claims are made.

## Data and auth
No app data persistence, authentication, customer accounts, payments or ecommerce. Backend remains the template connectivity API only; the enquiry is intentionally local demo state.
