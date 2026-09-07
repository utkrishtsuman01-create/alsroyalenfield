import { CalendarDays, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="mobile-action-bar md:hidden" data-testid="mobile-action-bar">
      <a href={`tel:${business.phones[0]}`} data-testid="mobile-bar-call-button"><Phone size={17} /><span>Call</span></a>
      <Link to="/book" data-testid="mobile-bar-book-button"><CalendarDays size={17} /><span>Book</span></Link>
      <a href={business.mapsUrl} target="_blank" rel="noreferrer" data-testid="mobile-bar-directions-button"><MapPin size={17} /><span>Directions</span></a>
    </div>
  );
}
