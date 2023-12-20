import { defineStore } from 'pinia';

export const createSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
  }),
  actions: {
    preferDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    }
  },
});