import React, { createContext, useContext, useEffect, useState } from "react";
import { TimeOfDay, getAtmosphereState, ATMOSPHERE_CONFIGS, AtmosphereConfig } from "@/lib/atmosphere";

interface AtmosphereContextType {
  timeOfDay: TimeOfDay;
  config: AtmosphereConfig;
}

const AtmosphereContext = createContext<AtmosphereContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAtmosphere = () => {
  const context = useContext(AtmosphereContext);
  if (!context) {
    throw new Error("useAtmosphere must be used within an AtmosphereProvider");
  }
  return context;
};

export const AtmosphereProvider = ({ children }: { children: React.ReactNode }) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("night"); // Fallback

  useEffect(() => {
    // Determine initial time
    const initialTime = getAtmosphereState();
    setTimeOfDay(initialTime);

    // Set up interval to check every minute
    const interval = setInterval(() => {
      const currentTime = getAtmosphereState();
      if (currentTime !== timeOfDay) {
        setTimeOfDay(currentTime);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [timeOfDay]);

  useEffect(() => {
    // Inject CSS variables into the root
    const root = document.documentElement;
    const config = ATMOSPHERE_CONFIGS[timeOfDay];
    
    root.style.setProperty("--color-ambient-glow", config.ambientGlow);
    root.style.setProperty("--color-lens-flare", config.lensFlare);
    
    // Add a class for tailwind arbitrary variants if needed
    root.classList.remove("time-morning", "time-afternoon", "time-golden-hour", "time-night");
    root.classList.add(`time-${timeOfDay}`);
  }, [timeOfDay]);

  return (
    <AtmosphereContext.Provider value={{ timeOfDay, config: ATMOSPHERE_CONFIGS[timeOfDay] }}>
      {children}
    </AtmosphereContext.Provider>
  );
};
