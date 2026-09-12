import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import MobileBar from "@/components/site/MobileBar";
import SiteMeta from "@/lib/seo";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-root"><SiteMeta /><SiteHeader /><main>{children}</main><SiteFooter /><MobileBar /></div>;
}
