export interface ApiErrorShape {
  title?: string
  detail: string
  status?: number
  code?: string
  extensions?: Record<string, unknown>
}
