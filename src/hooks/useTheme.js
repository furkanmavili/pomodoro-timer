import create from "zustand";

const useTheme = create((set) => ({
    theme: "dark",
    toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useTheme;
