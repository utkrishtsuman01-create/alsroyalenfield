import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { images, services, type ServiceCategory } from "@/lib/site";

const groups: { name: ServiceCategory; note: string }[] = [
  { name: "Maintenance", note: "Keep the essentials in view." },
  { name: "Repair", note: "Start with the issue in front of us." },
  { name: "Bike care", note: "A considered check for your ride." },
];

export default function Services() {
  return <div data-testid="services-page"><PageIntro current="Services" number="02" eyebrow="Service menu / Enquire" title={<>Motorcycle service<br /><span className="text-amber-300">& repair.</span></>} description="A practical service menu for maintenance, repair and bike care. Tell us what your motorcycle needs and enquire for the next step." image={images.workshop} />
    <section className="section-shell" data-testid="services-list-section"><div className="max-w-2xl"><p className="eyebrow">Service categories</p><p className="body-copy mt-5">Every bike and every concern is different. These are starting points for your service conversation — enquire for pricing and availability.</p></div><div className="mt-16 grid gap-16">{groups.map((group, groupIndex) => <div key={group.name} data-testid={`services-category-${group.name.toLowerCase().replace(" ", "-")}`}><div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4"><div><span className="eyebrow">0{groupIndex + 1}</span><h2 className="mt-2 font-display text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">{group.name}</h2></div><span className="hidden text-sm text-white/40 sm:block">{group.note}</span></div><div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">{services.filter((service) => service.category === group.name).map((service) => <Link to={`/book-service?service=${encodeURIComponent(service.title)}`} key={service.index} className="service-detail-row group" data-testid={`service-${service.index}-enquire-link`}><div className="service-detail-number">{service.index}</div><div className="service-detail-image"><img src={service.image} alt={`${service.title} service enquiry at ALS Royal Enfield Service`} /></div><div className="min-w-0 flex-1"><h3>{service.title}</h3><p>{service.description}</p></div><div className="service-detail-action"><span>Enquire</span><ArrowUpRight size={18} /></div></Link>)}</div></div>)}</div></section><CtaBand title="Not sure what your bike needs? Start with an enquiry." /></div>;
}
