import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import MobileBar from "@/components/site/MobileBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-root"><SiteHeader /><main>{children}</main><SiteFooter /><MobileBar /></div>;
}
