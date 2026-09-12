export const WHATSAPP_RECIPIENT = "919007692978";

export interface ServiceEnquiry {
  name: string;
  phone: string;
  email: string;
  bikeModel: string;
  registration: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const clean = (value: string, maxLength: number) =>
  value.trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").slice(0, maxLength);

export function buildWhatsAppEnquiryUrl(enquiry: ServiceEnquiry) {
  const lines = [
    "Hello ALS Royal Enfield Service, I would like to enquire about motorcycle service.",
    "",
    `Name: ${clean(enquiry.name, 80)}`,
    `Phone: ${clean(enquiry.phone, 19)}`,
    `Email: ${clean(enquiry.email, 160)}`,
    `Bike model: ${clean(enquiry.bikeModel, 80)}`,
    enquiry.registration ? `Registration: ${clean(enquiry.registration, 20)}` : "",
    `Service: ${clean(enquiry.service, 80)}`,
    `Preferred date: ${clean(enquiry.preferredDate, 10)}`,
    enquiry.preferredTime ? `Preferred time: ${clean(enquiry.preferredTime, 5)}` : "",
    `Message: ${clean(enquiry.message, 1000)}`,
    "",
    "I understand this is an enquiry and does not confirm an appointment.",
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_RECIPIENT}?text=${encodeURIComponent(lines.join("\n"))}`;
}
