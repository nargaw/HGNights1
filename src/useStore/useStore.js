import { create } from 'zustand'

export default create((set, get) => {
    return {
        mode: 'dark',

        darkModeOn: () =>
        {
            set((state) => ({mode: 'dark'}))
        },

        lightModeOn: () => 
        {
            set((state) => ({mode: 'light'}))
        }
    }
})