import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import PageIntro from "@/components/site/PageIntro";
import CtaBand from "@/components/site/CtaBand";
import { business, images } from "@/lib/site";

export default function Contact() {
  return (
    <div data-testid="contact-page">
      <PageIntro
        current="Contact"
        number="07"
        eyebrow="Call / enquire"
        title={<>Get in<br /><span className="text-amber-300">touch.</span></>}
        description="Call the workshop, get directions or prepare a service enquiry to send through WhatsApp."
        image={images.signboard}
      />
      <section className="section-shell" data-testid="contact-details-section">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow">Contact the workshop</p>
            <h2 className="section-heading mt-5">No bots.<br /><span className="text-white/40">Just bikes.</span></h2>
            <p className="body-copy mt-7 max-w-xl">Tell us what your motorcycle needs, or speak to the workshop directly. The enquiry form prepares a private WhatsApp draft that you choose to send.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${business.phones[0]}`} className={buttonVariants({ size: "lg", className: "cta-amber" })} data-testid="contact-call-primary-link"><Phone size={16} /> Call +91 90076 92978</a>
              <Link to="/book-service" className={buttonVariants({ variant: "outline", size: "lg", className: "cta-outline" })} data-testid="contact-book-link"><MessageCircle size={16} /> WhatsApp enquiry</Link>
            </div>
          </div>
          <div className="contact-detail-card">
            <div className="contact-detail-row">
              <Phone size={19} />
              <div><span className="eyebrow">Call now</span><a href={`tel:${business.phones[0]}`} data-testid="contact-phone-one-link">{business.formattedPhones[0]}</a><a href={`tel:${business.phones[1]}`} data-testid="contact-phone-two-link">{business.formattedPhones[1]}</a></div>
            </div>
            <div className="contact-detail-row">
              <MapPin size={19} />
              <div><span className="eyebrow">Visit us</span><p data-testid="contact-location-copy">Post Office Joka<br />172, Mahatma Gandhi Rd<br />Srijoni, Thakurpukur<br />Kolkata, Chak Thakurani<br />West Bengal 700104, India</p><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-3 inline-flex" data-testid="contact-directions-link">Get directions <ArrowUpRight size={15} /></a></div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Ready to talk through your bike?" />
    </div>
  );
}
