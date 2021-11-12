import create from "zustand";

const useSettings = create((set) => ({
    sound: true,
    autoStart: false,
    pomodoro: 0.1,
    short: 0.05,
    long: 0.05,
    setSetting: (key, value) => set((state) => ({ [key]: value })),
}));
export default useSettings;
