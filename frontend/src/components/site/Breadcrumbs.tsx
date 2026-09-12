import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs" data-testid="breadcrumbs">
      <ol>
        <li><Link to="/" data-testid="breadcrumb-home-link">Home</Link></li>
        <li aria-hidden="true"><ChevronRight size={13} /></li>
        <li aria-current="page"><span data-testid="breadcrumb-current-label">{current}</span></li>
      </ol>
    </nav>
  );
}
