import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "@studio-freight/react-lenis";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AtmosphereProvider } from "@/components/AtmosphereProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import Survey from "@/components/Survey";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AgeVerification from "./components/AgeVerification";
import { CanvasBackground } from "@/components/ui/CanvasBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";

const Index = lazy(() => import("./pages/Index.tsx"));
const Catalog = lazy(() => import("./pages/Catalog.tsx"));
const Events = lazy(() => import("./pages/Events.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
    <QueryClientProvider client={queryClient}>
      <AtmosphereProvider>
        <TooltipProvider>
          <CanvasBackground />
          <CustomCursor />
          <Toaster />
          <Sonner />
          <AgeVerification />
          <Header />
          <BrowserRouter>
            <Suspense fallback={<RouteFallback />}>
              <AnimatedRoutes />
            </Suspense>
          </BrowserRouter>
          <Footer />
          <StickyMobileBar />
          <Survey />
        </TooltipProvider>
      </AtmosphereProvider>
    </QueryClientProvider>
  </ReactLenis>
);

export default App;
