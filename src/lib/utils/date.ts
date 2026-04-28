export function formatDate(value: string | number | Date): string {
  return new Date(value).toLocaleDateString()
}
