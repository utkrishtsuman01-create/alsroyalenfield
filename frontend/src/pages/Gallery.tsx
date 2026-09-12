import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { images } from "@/lib/site";

const galleryItems = [
  { title: "Workshop floor", category: "Workshop", image: images.workshop, note: "Inside the ALS service bay." },
  { title: "The motorcycle", category: "Motorcycles", image: images.motorcycleSide, note: "A closer look at the ride." },
  { title: "Service platform", category: "Service", image: images.motorcycleRear, note: "Where the work gets practical." },
  { title: "The front door", category: "Workshop", image: images.storefront, note: "Find ALS at Post Office Joka." },
  { title: "Workshop identity", category: "Details", image: images.signboard, note: "The sign that points you in." },
];
const filters = ["All", "Workshop", "Motorcycles", "Service", "Details"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const visible = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return <div data-testid="gallery-page"><PageIntro current="Gallery" number="05" eyebrow="Real workshop imagery" title={<>The workshop<br /><span className="text-amber-300">in motion.</span></>} description="A visual look at the motorcycles, workshop and details that make ALS Royal Enfield Service feel like a place to visit." image={images.motorcycleRear} /><section className="section-shell" data-testid="gallery-section"><div className="flex flex-wrap gap-2 border-b border-white/10 pb-7" data-testid="gallery-filters">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`gallery-filter ${filter === item ? "gallery-filter-active" : ""}`} data-testid={`gallery-filter-${item.toLowerCase()}-button`}>{item}</button>)}</div><div className="gallery-grid mt-10" data-testid="gallery-grid">{visible.map((item, index) => <button type="button" key={item.title} onClick={() => setSelected(item)} className={`gallery-tile gallery-tile-${index + 1}`} data-testid={`gallery-${item.category.toLowerCase()}-${index + 1}-button`}><img src={item.image} alt={`${item.title} at ALS Royal Enfield Service`} /><span className="gallery-tile-overlay"><span><small>{item.category}</small><strong>{item.title}</strong></span><ArrowUpRight size={18} /></span></button>)}</div></section><Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}><DialogContent className="gallery-dialog-content" data-testid="gallery-lightbox-dialog"><DialogTitle className="sr-only">{selected?.title ?? "Gallery image"}</DialogTitle><DialogDescription className="sr-only">{selected?.note ?? "Workshop gallery image"}</DialogDescription>{selected && <div><div className="relative overflow-hidden"><img src={selected.image} alt={`${selected.title} at ALS Royal Enfield Service`} className="max-h-[70vh] w-full object-contain" data-testid="gallery-lightbox-image" /><button type="button" className="absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white" onClick={() => setSelected(null)} aria-label="Close gallery" data-testid="gallery-lightbox-close-button"><X size={18} /></button></div><div className="flex items-end justify-between gap-4 p-5"><div><p className="eyebrow">{selected.category}</p><h3 className="mt-2 font-display text-2xl font-black uppercase text-white">{selected.title}</h3><p className="mt-2 text-sm text-white/55">{selected.note}</p></div><Link to="/book-service" onClick={() => setSelected(null)} className="text-link" data-testid="gallery-lightbox-enquire-link">Enquire <ArrowUpRight size={15} /></Link></div></div>}</DialogContent></Dialog><CtaBand title="Seen something that looks like your bike? Enquire with the workshop." /></div>;
}
