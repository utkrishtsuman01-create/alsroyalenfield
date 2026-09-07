import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Workshop from "@/pages/Workshop";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Visit from "@/pages/Visit";
import Contact from "@/pages/Contact";
import BookService from "@/pages/BookService";
import SiteLayout from "@/components/site/SiteLayout";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookService />} />
      </Routes>
    </SiteLayout>
  );
}
