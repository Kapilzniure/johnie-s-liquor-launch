import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <Seo title="Page Not Found | Johnnies Liquor Store" path={location.pathname} noindex />
      <div className="text-center px-6">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Page Not Found</div>
        <h1 className="font-display font-black text-8xl md:text-9xl leading-none tracking-tighter mb-4 text-foreground/10">404</h1>
        <p className="font-display text-xl font-bold mb-2">We couldn't find that page.</p>
        <p className="text-sm text-muted-foreground mb-8">The link may be broken or the page may have moved.</p>
        <a href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500">
          ← Back to Johnnies
        </a>
      </div>
    </div>
  );
};

export default NotFound;
