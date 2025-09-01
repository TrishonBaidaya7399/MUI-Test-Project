import { create } from "zustand"

interface SidebarState {
  mobileOpen: boolean
  collapsed: boolean
  hovered: boolean
  setMobileOpen: (open: boolean) => void
  setCollapsed: (collapsed: boolean) => void
  setHovered: (hovered: boolean) => void
  toggleCollapsed: () => void
  toggleMobileOpen: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  mobileOpen: false,
  collapsed: false,
  hovered: false,
  setMobileOpen: (open) => set({ mobileOpen: open }),
  setCollapsed: (collapsed) => set({ collapsed }),
  setHovered: (hovered) => set({ hovered }),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  toggleMobileOpen: () => set((state) => ({ mobileOpen: !state.mobileOpen })),
}))
