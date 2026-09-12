export const business = {
  name: "ALS Royal Enfield Service",
  shortName: "ALS",
  tagline: "Professional motorcycle servicing and repair in Thakurpukur, Kolkata.",
  location: "Thakurpukur • Kolkata",
  phones: ["9007692978", "9748615101"],
  formattedPhones: ["+91 90076 92978", "+91 97486 15101"],
  address: [
    "Post Office Joka,",
    "172, Mahatma Gandhi Rd,",
    "Srijoni, Thakurpukur,",
    "Kolkata, Chak Thakurani,",
    "West Bengal 700104, India",
  ],
  hours: {
    weekdays: "Monday – Saturday",
    weekdayTime: "10:30 AM – 7:30 PM",
    sunday: "Sunday",
    sundayTime: "10:30 AM – 3:00 PM",
  },
  mapsUrl:
    "https://www.google.com/maps/dir//Post+Office+Joka,+172,+Mahatma+Gandhi+Rd,+Srijoni,+Thakurpukur,+Kolkata,+Chak+Thakurani,+West+Bengal+700104",
} as const;

export const images = {
  workshop: "https://customer-assets-4nw71qhi.emergentagent.net/job_e4df3abb-9206-4392-bdfb-dc077d351f56/artifacts/7h24ywyn_image.png",
  motorcycleRear: "https://customer-assets-4nw71qhi.emergentagent.net/job_e4df3abb-9206-4392-bdfb-dc077d351f56/artifacts/s7qk9ny9_image.png",
  storefront: "https://customer-assets-4nw71qhi.emergentagent.net/job_e4df3abb-9206-4392-bdfb-dc077d351f56/artifacts/sgay6tgx_image.png",
  signboard: "https://customer-assets-4nw71qhi.emergentagent.net/job_e4df3abb-9206-4392-bdfb-dc077d351f56/artifacts/22x4ejdl_image.png",
  motorcycleSide: "https://customer-assets-4nw71qhi.emergentagent.net/job_e4df3abb-9206-4392-bdfb-dc077d351f56/artifacts/pbupvgko_image.png",
} as const;

export type ServiceCategory = "Maintenance" | "Repair" | "Bike care";

export interface ServiceItem {
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  index: string;
}

export const services: ServiceItem[] = [
  {
    title: "Periodic Servicing",
    category: "Maintenance",
    description: "A considered check-in for regular upkeep, running through the essentials that keep your ride ready.",
    image: images.workshop,
    index: "01",
  },
  {
    title: "Oil & Filter Service",
    category: "Maintenance",
    description: "Routine oil and filter attention as part of a straightforward, service-focused visit.",
    image: images.motorcycleRear,
    index: "02",
  },
  {
    title: "Chain & Sprocket Check",
    category: "Maintenance",
    description: "A practical look at the chain and sprocket area during maintenance or inspection work.",
    image: images.motorcycleSide,
    index: "03",
  },
  {
    title: "General Inspection",
    category: "Bike care",
    description: "Bring in the bike, talk through your concern, and get a clear look at what needs attention.",
    image: images.storefront,
    index: "04",
  },
  {
    title: "General Mechanical Repairs",
    category: "Repair",
    description: "Hands-on repair work for the mechanical issues that surface through regular riding and use.",
    image: images.workshop,
    index: "05",
  },
  {
    title: "Brake & Clutch Service",
    category: "Repair",
    description: "Service enquiries for brake and clutch concerns, from feel and function to general adjustment.",
    image: images.motorcycleSide,
    index: "06",
  },
  {
    title: "Engine / Mechanical Diagnosis",
    category: "Repair",
    description: "Start with the symptom. We discuss the bike, inspect the concern, and outline the next step.",
    image: images.motorcycleRear,
    index: "07",
  },
  {
    title: "Electrical Diagnosis",
    category: "Repair",
    description: "A focused starting point for electrical concerns and everyday motorcycle diagnostics.",
    image: images.signboard,
    index: "08",
  },
];

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Workshop", to: "/workshop" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Visit Us", to: "/visit-us" },
  { label: "Contact", to: "/contact" },
] as const;
