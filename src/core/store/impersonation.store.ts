import { create } from 'zustand'

interface ImpersonationState {
  isImpersonating: boolean
  setImpersonating: (value: boolean) => void
  reset: () => void
}

export const useImpersonationStore = create<ImpersonationState>(set => ({
  isImpersonating: false,
  setImpersonating: value => set({ isImpersonating: value }),
  reset: () => set({ isImpersonating: false })
}))
