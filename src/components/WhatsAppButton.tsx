import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsApp } from "@/components/Icons";

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Order on WhatsApp"
    className="fixed bottom-36 right-6 z-40 md:bottom-20 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
    style={{ backgroundColor: "#25D366" }}
  >
    <WhatsApp className="w-7 h-7 text-white" />
  </a>
);
