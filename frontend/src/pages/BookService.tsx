import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, Phone, Send } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/site/PageIntro";
import { business, images } from "@/lib/site";

const serviceOptions = ["Periodic Service", "General Repair", "Brake / Clutch", "Engine / Mechanical", "Electrical", "Oil / Filter", "Inspection", "Other"];

export default function BookService() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(searchParams.get("service") ?? "Periodic Service");
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const phone = String(values.get("phone") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const bikeModel = String(values.get("bike_model") ?? "").trim();
    const date = String(values.get("date") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    if (name.length < 2 || name.length > 80) return setFormError("Please enter a name between 2 and 80 characters.");
    if (!/^[+\d][\d\s-]{7,18}$/.test(phone)) return setFormError("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setFormError("Please enter a valid email address.");
    if (bikeModel.length < 2 || bikeModel.length > 80) return setFormError("Please enter your motorcycle model.");
    if (!serviceOptions.includes(service)) return setFormError("Please choose a valid service type.");
    if (!date) return setFormError("Please choose a preferred date.");
    if (message.length < 10 || message.length > 1000) return setFormError("Please add a message between 10 and 1,000 characters.");
    setFormError("");
    setSubmitted(true);
    toast.success("Enquiry received locally", { description: "This demo does not send or confirm an appointment." });
  }

  return <div data-testid="book-service-page"><PageIntro current="Book Service" number="08" eyebrow="Service enquiry" title={<>Book your next<br /><span className="text-amber-300">service.</span></>} description="Share a few details about your motorcycle and what it needs. This demo shows a local confirmation state — it does not send or confirm an appointment." image={images.workshop} /><section className="section-shell" data-testid="booking-section"><div className="booking-layout"><div className="booking-side"><Link to="/services" className="text-link" data-testid="booking-back-services-link"><ArrowLeft size={15} /> Back to services</Link><h2 className="section-heading mt-8">Tell us about<br /><span className="text-white/40">the ride.</span></h2><p className="body-copy mt-6">Use this enquiry to start the conversation. For an immediate response, call the workshop.</p><div className="mt-10 grid gap-4"><a href={`tel:${business.phones[0]}`} className="contact-mini" data-testid="booking-call-link"><Phone size={17} /><span><small>Call now</small>{business.formattedPhones[0]}</span><ArrowUpRight size={15} /></a><a href={business.mapsUrl} target="_blank" rel="noreferrer" className="contact-mini" data-testid="booking-directions-link"><MapPin size={17} /><span><small>Visit workshop</small>Get directions</span><ArrowUpRight size={15} /></a></div></div><div className="booking-panel">{submitted ? <div className="booking-success" data-testid="booking-success-state"><CheckCircle2 size={42} className="text-amber-300" /><p className="eyebrow mt-7">Enquiry noted</p><h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white">Thanks for reaching out.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/60">Your details were captured in this local demo. The workshop has not been contacted and no appointment has been confirmed.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`tel:${business.phones[0]}`} className="text-link" data-testid="booking-success-call-link"><Phone size={15} /> Call the workshop</a><Link to="/" className="text-link" data-testid="booking-success-home-link">Back home <ArrowUpRight size={15} /></Link></div></div> : <form onSubmit={handleSubmit} noValidate data-testid="booking-form"><div className="form-heading"><span className="eyebrow">Service enquiry / 01</span><h2 data-testid="booking-form-heading">Request service</h2><p>Required fields are marked with an asterisk.</p></div>{formError && <p className="form-error" role="alert" data-testid="booking-form-error">{formError}</p>}<div className="form-grid"><label className="form-field"><span>Name *</span><input required minLength={2} maxLength={80} name="name" autoComplete="name" placeholder="Your name" data-testid="booking-name-input" /></label><label className="form-field"><span>Phone *</span><input required maxLength={19} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" data-testid="booking-phone-input" /></label><label className="form-field"><span>Email *</span><input required maxLength={160} name="email" type="email" autoComplete="email" placeholder="you@domain.com" data-testid="booking-email-input" /></label><label className="form-field"><span>Motorcycle / Bike Model *</span><input required minLength={2} maxLength={80} name="bike_model" placeholder="e.g. Classic 350" data-testid="booking-bike-model-input" /></label><label className="form-field"><span>Registration Number</span><input maxLength={20} name="registration" placeholder="Optional" data-testid="booking-registration-input" /></label><label className="form-field"><span>Service Required *</span><select required name="service" value={service} onChange={(event) => setService(event.target.value)} data-testid="booking-service-select">{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label className="form-field"><span>Preferred Date *</span><input required name="date" type="date" min={new Date().toISOString().slice(0, 10)} data-testid="booking-date-input" /></label><label className="form-field"><span>Preferred Time</span><input name="time" type="time" data-testid="booking-time-input" /></label><label className="form-field form-field-wide"><span>Message *</span><textarea required minLength={10} maxLength={1000} name="message" rows={4} placeholder="Tell us what the bike needs..." data-testid="booking-message-input" /></label></div><Button type="submit" size="lg" className="cta-amber mt-8 w-full justify-between sm:w-auto" data-testid="booking-form-submit-button">Request service <Send size={16} /></Button><p className="mt-4 text-xs leading-5 text-white/35" data-testid="booking-form-disclaimer">Demo only · Submitting shows a local confirmation and does not contact the workshop.</p></form>}</div></div></section></div>;
}
