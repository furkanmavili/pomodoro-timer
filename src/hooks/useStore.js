import create from "zustand";


const initialQueue = ["pomodoro", "short", "pomodoro", "short", "pomodoro", "short", "pomodoro", "long"]

const useStore = create((set) => ({
    queue: initialQueue,
    isCounting: false,
    completed: false,
    setIsCounting: (value) => set(state => ({isCounting: value})),
    shiftQueue: () => set(state => ({ queue: state.queue.slice(1) })),
    resetQueue: (value) => set((state) => ({ queue: [...initialQueue] })),
    setCompleted: (value) =>set(() => ({completed: value}))
}));
export default useStore;
