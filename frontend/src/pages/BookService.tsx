import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/site/PageIntro";
import { business, images } from "@/lib/site";
import { buildWhatsAppEnquiryUrl, type ServiceEnquiry } from "@/lib/whatsapp";

const serviceOptions = ["Periodic Service", "General Repair", "Brake / Clutch", "Engine / Mechanical", "Electrical", "Oil / Filter", "Inspection", "Other"];

export default function BookService() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState(searchParams.get("service") ?? "Periodic Service");
  const [consent, setConsent] = useState(false);
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const enquiry: ServiceEnquiry = {
      name: String(values.get("name") ?? "").trim(),
      phone: String(values.get("phone") ?? "").trim(),
      email: String(values.get("email") ?? "").trim(),
      bikeModel: String(values.get("bike_model") ?? "").trim(),
      registration: String(values.get("registration") ?? "").trim(),
      service,
      preferredDate: String(values.get("date") ?? "").trim(),
      preferredTime: String(values.get("time") ?? "").trim(),
      message: String(values.get("message") ?? "").trim(),
    };

    if (enquiry.name.length < 2 || enquiry.name.length > 80) return setFormError("Please enter a name between 2 and 80 characters.");
    if (!/^[+\d][\d\s-]{7,18}$/.test(enquiry.phone)) return setFormError("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) return setFormError("Please enter a valid email address.");
    if (enquiry.bikeModel.length < 2 || enquiry.bikeModel.length > 80) return setFormError("Please enter your motorcycle model.");
    if (!serviceOptions.includes(enquiry.service)) return setFormError("Please choose a valid service type.");
    if (!enquiry.preferredDate) return setFormError("Please choose a preferred date.");
    if (enquiry.message.length < 10 || enquiry.message.length > 1000) return setFormError("Please add a message between 10 and 1,000 characters.");
    if (!consent) return setFormError("Please agree to be contacted about this service enquiry.");

    setFormError("");
    window.open(buildWhatsAppEnquiryUrl(enquiry), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    toast.success("WhatsApp draft prepared", { description: "Review and send the message in WhatsApp to contact the workshop." });
  }

  return (
    <div data-testid="book-service-page">
      <PageIntro
        current="Book Service"
        number="08"
        eyebrow="Service enquiry"
        title={<>Book your next<br /><span className="text-amber-300">service.</span></>}
        description="Share what your motorcycle needs. We’ll prepare a WhatsApp message for you to review and send to the workshop — this does not confirm an appointment."
        image={images.workshop}
      />
      <section className="section-shell" data-testid="booking-section">
        <div className="booking-layout">
          <div className="booking-side">
            <Link to="/services" className="text-link" data-testid="booking-back-services-link"><ArrowLeft size={15} /> Back to services</Link>
            <h2 className="section-heading mt-8">Tell us about<br /><span className="text-white/40">the ride.</span></h2>
            <p className="body-copy mt-6">Use this form to prepare your enquiry. You decide whether to send it after WhatsApp opens.</p>
            <div className="mt-10 grid gap-4">
              <a href={`tel:${business.phones[0]}`} className="contact-mini" data-testid="booking-call-link"><Phone size={17} /><span><small>Call now</small>{business.formattedPhones[0]}</span><ArrowUpRight size={15} /></a>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-mini" data-testid="booking-directions-link"><MapPin size={17} /><span><small>Visit workshop</small>Get directions</span><ArrowUpRight size={15} /></a>
            </div>
          </div>

          <div className="booking-panel">
            {submitted ? (
              <div className="booking-success" data-testid="booking-success-state">
                <CheckCircle2 size={42} className="text-amber-300" aria-hidden="true" />
                <p className="eyebrow mt-7">WhatsApp prepared</p>
                <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white">Review and send your message.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">WhatsApp opened with your enquiry as a draft. You still need to review and send it there. No appointment is confirmed until the workshop responds.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`tel:${business.phones[0]}`} className="text-link" data-testid="booking-success-call-link"><Phone size={15} /> Call the workshop</a>
                  <Link to="/" className="text-link" data-testid="booking-success-home-link">Back home <ArrowUpRight size={15} /></Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate data-testid="booking-form">
                <div className="form-heading">
                  <span className="eyebrow">WhatsApp enquiry / 01</span>
                  <h2 data-testid="booking-form-heading">Request service</h2>
                  <p>Required fields are marked with an asterisk.</p>
                </div>
                {formError && <p className="form-error" role="alert" data-testid="booking-form-error">{formError}</p>}
                <div className="form-grid">
                  <label className="form-field"><span>Name *</span><input required minLength={2} maxLength={80} name="name" autoComplete="name" placeholder="Your name" data-testid="booking-name-input" /></label>
                  <label className="form-field"><span>Phone *</span><input required maxLength={19} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Your phone number" data-testid="booking-phone-input" /></label>
                  <label className="form-field"><span>Email *</span><input required maxLength={160} name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@domain.com" data-testid="booking-email-input" /></label>
                  <label className="form-field"><span>Motorcycle / Bike Model *</span><input required minLength={2} maxLength={80} name="bike_model" placeholder="e.g. Classic 350" data-testid="booking-bike-model-input" /></label>
                  <label className="form-field"><span>Registration Number</span><input maxLength={20} name="registration" placeholder="Optional" data-testid="booking-registration-input" /></label>
                  <label className="form-field"><span>Service Required *</span><select required name="service" value={service} onChange={(event) => setService(event.target.value)} data-testid="booking-service-select">{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
                  <label className="form-field"><span>Preferred Date *</span><input required name="date" type="date" min={new Date().toISOString().slice(0, 10)} data-testid="booking-date-input" /></label>
                  <label className="form-field"><span>Preferred Time</span><input name="time" type="time" data-testid="booking-time-input" /></label>
                  <label className="form-field form-field-wide"><span>Message *</span><textarea required minLength={10} maxLength={1000} name="message" rows={4} placeholder="Tell us what the bike needs..." data-testid="booking-message-input" /></label>
                </div>

                <label className="consent-row" data-testid="booking-consent-label">
                  <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} data-testid="booking-consent-checkbox" />
                  <span>I agree that ALS Royal Enfield Service may contact me about this specific service enquiry. My details are placed only into the WhatsApp draft I choose to send.</span>
                </label>

                <Button type="submit" size="lg" className="cta-amber mt-8 w-full justify-between sm:w-auto" data-testid="booking-form-submit-button">Continue in WhatsApp <MessageCircle size={16} aria-hidden="true" /></Button>
                <p className="mt-4 text-xs leading-5 text-white/35" data-testid="booking-form-disclaimer">WhatsApp will open with a prepared message. You must review and send it there. This does not confirm delivery, availability or an appointment.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
