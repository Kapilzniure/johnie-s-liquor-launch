import { IG_URL } from "@/lib/constants";
import { Instagram } from "@/components/Icons";

export const WhatsAppButton = () => (
  <a
    href={IG_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Message us on Instagram"
    className="fixed bottom-36 right-6 z-40 md:bottom-20 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
    style={{ backgroundColor: "#E1306C" }}
  >
    <Instagram className="w-7 h-7 text-white" />
  </a>
);
