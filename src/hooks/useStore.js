import create from "zustand";

const useStore = create((set) => ({
    activeMode: "pomodoro",
    isCounting: false,
    setActiveMode: (value) => set((state) => ({ activeMode: value })),
    setIsCounting: (value) => set((state) => ({ isCounting: value })),
}));
export default useStore;
