import create from "zustand";

const useSettings = create((set) => ({
    sound: true,
    autoStart: false,
    pomodoro: 25,
    short: 5,
    long: 15,
    setSetting: (key, value) => set((state) => ({ [key]: value })),
}));
export default useSettings;
