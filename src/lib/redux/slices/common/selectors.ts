import type { RootState } from '@/lib/redux/store'

export const selectIsSidebarCollapsed = (state: RootState) => state.common.isSidebarCollapsed
