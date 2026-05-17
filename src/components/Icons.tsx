import { 
  Instagram as InstagramIcon, 
  Facebook as FacebookIcon,
  Phone, 
  MapPin, 
  Clock, 
  Navigation, 
  Menu, 
  X, 
  Wine, 
  Beer, 
  GlassWater, 
  Truck, 
  ChevronDown, 
  Sparkles, 
  Star, 
  Package, 
  Award,
  Gift
} from "lucide-react";

export const Instagram = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export {
  Phone, 
  MapPin, 
  Clock, 
  Navigation, 
  Menu, 
  X, 
  Wine, 
  Beer, 
  GlassWater, 
  Truck, 
  ChevronDown, 
  Sparkles, 
  Star, 
  Package, 
  Award,
  Gift
};
