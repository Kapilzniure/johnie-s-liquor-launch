import { create } from 'zustand';

interface SurveyStore {
  isOpen: boolean;
  openSurvey: () => void;
  closeSurvey: () => void;
}

export const useSurveyStore = create<SurveyStore>((set) => ({
  isOpen: false,
  openSurvey: () => set({ isOpen: true }),
  closeSurvey: () => set({ isOpen: false }),
}));
